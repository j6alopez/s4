import {User} from '../../domain/entitites/User.js';
import {UrlHelper} from '../../utilites/UrlHelper.js';
import {WeatherDTO} from '../dtos/WeatherDTO.js';

export class WeatherDataSource {
  private readonly BASE_URL = 'http://api.weatherapi.com/v1/current.json';

  async getCurrentWeather(user: User): Promise<WeatherDTO> {
    const queryParams: Map<string, string> = new Map();
    queryParams.set('key', user.apiKey);
    queryParams.set('q', user.city);
    queryParams.set('aqi', 'no');

    const resource: URL = UrlHelper.addQueryParams(this.BASE_URL, queryParams);
    const httpHeaders: Headers = new Headers();
    httpHeaders.append('Content-Type', 'application/json');

    try {
      const response: Response = await fetch(resource, {
        method: 'GET',
        headers: httpHeaders,
      });

      if (!response.ok) {
        throw new Error('Current Weather was not possible to retrieve!');
      }
      return <WeatherDTO>await response.json();
    } catch (error) {
      throw new Error('Somethig wrong happened while parsing Weather!');
    }
  }
}

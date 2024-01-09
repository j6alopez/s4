import {UserConfig} from '../../config/UserConfig.js';
import {UrlHelper} from '../../utilites/UrlHelper.js';
import {User} from '../entitites/User.js';
import {Weather} from '../entitites/Weather.js';
export class WeatherService {
  private readonly BASE_URL = 'http://api.weatherapi.com/v1/current.json';

  async getCurrentWeather(): Promise<Weather> {
    const user: User = this.getUserConfig();

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

      const currentWeather: Weather = await response.json();
      return currentWeather;
    } catch (error) {
      throw new Error('Somethig wrong happened while parsing Weather!');
    }
  }

  private getUserConfig(): User {
    return new UserConfig();
  }
}

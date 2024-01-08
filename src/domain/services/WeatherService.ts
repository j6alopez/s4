import {UrlHelper} from '../../utilites/UrlHelper';
import {User} from '../entitites/User';
import {Weather} from '../entitites/Weather';
export class WeatherService {
  private readonly BASE_URL = 'http://api.weatherapi.com/v1/current.json';

  async getCurrentWeather(): Promise<Weather> {
    const user: User = await this.getUserConfig();

    const queryParams: Map<string, string> = new Map();
    queryParams.set('key', user.apiKey);
    queryParams.set('q', user.apiKey);
    queryParams.set('', 'no');

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

  private async getUserConfig(): Promise<User> {
    try {
      const userConfig: User = await fetch('../../config/UserConfig.json').then(
        response => response.json()
      );
      return userConfig;
    } catch (error) {
      throw new Error(`Error while parsing UserConfig.json: ${error}`);
    }
  }
}

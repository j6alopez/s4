import {UserConfig} from '../../../config/UserConfig.js';
import {User} from '../../entitites/User.js';
import {CurrentWeather} from '../../entitites/CurrentWeather.js';
import {WeatherMapper} from '../../mappers/WeatherMapper.js';
import {WeatherDataSource} from '../../../infrastructure/datasources/WeatherDataSource.js';
import {WeatherDTOResponse} from '../../../infrastructure/dtos/WeatherDTOResponse.js';
import {WeatherService} from './WeatherService.js';

export class DefualtWeather implements WeatherService {
  async getCurrentWeather(): Promise<CurrentWeather> {
    const weatherDataSource: WeatherDataSource = new WeatherDataSource();
    const user: User = this.getUserConfig();
    const weatherDTO: WeatherDTOResponse = await weatherDataSource.getCurrentWeather(user);
    return WeatherMapper.fromWeather(weatherDTO);
  }

  private getUserConfig(): User {
    return new UserConfig();
  }
}

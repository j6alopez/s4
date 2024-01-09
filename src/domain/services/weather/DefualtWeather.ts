import {UserConfig} from '../../../config/UserConfig.js';
import {User} from '../../entitites/User.js';
import {CurrentWeather} from '../../entitites/CurrentWeather.js';
import {WeatherMapper} from '../../mappers/WeatherMapper.js';
import {WeatherDataSource} from '../../../infrastructure/datasources/WeatherDataSource.js';
import {WeatherDTO} from '../../../infrastructure/dtos/WeatherDTO.js';
import {WeatherService} from './WeatherService.js';

export class DefualtWeather implements WeatherService {
  async getCurrentWeather(): Promise<CurrentWeather> {
    const weatherDataSource: WeatherDataSource = new WeatherDataSource();
    const user: User = this.getUserConfig();
    const weatherDTO: WeatherDTO = await weatherDataSource.getCurrentWeather(user);
    return WeatherMapper.fromWeather(weatherDTO);
  }

  private getUserConfig(): User {
    return new UserConfig();
  }
}

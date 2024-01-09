import {CurrentWeather} from '../entitites/CurrentWeather.js';
import {WeatherDTO} from '../../infrastructure/dtos/WeatherDTO.js';

export class WeatherMapper {
  static fromWeather(weatherDTO: WeatherDTO): CurrentWeather {
    return new CurrentWeather(weatherDTO.current.condition.icon, weatherDTO.current.temp_c);
  }
}

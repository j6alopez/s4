import {CurrentWeather} from '../entitites/CurrentWeather.js';
import {WeatherDTOResponse} from '../../infrastructure/dtos/WeatherDTOResponse.js';

export class WeatherMapper {
  static fromWeather(weatherDTO: WeatherDTOResponse): CurrentWeather {
    return new CurrentWeather(weatherDTO.current.condition.icon, weatherDTO.current.temp_c);
  }
}

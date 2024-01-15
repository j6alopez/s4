import {CurrentWeather} from '../entitites/CurrentWeather.js';
import {WeatherDTOResponse} from '../../infrastructure/dtos/WeatherDTOResponse.js';

export class WeatherMapper {
  static fromWeather(weatherDTO: WeatherDTOResponse): CurrentWeather {
    const {
      current: {
        condition: {icon},
        temp_c: temperature,
      },
    } = weatherDTO;

    return new CurrentWeather(icon, temperature);
  }
}

import { CurrentWeather } from '../entitites/CurrentWeather.js';
import { WeatherDTOResponse } from '../../infrastructure/dtos/WeatherDTOResponse.js';
export declare class WeatherMapper {
    static fromWeather(weatherDTO: WeatherDTOResponse): CurrentWeather;
}

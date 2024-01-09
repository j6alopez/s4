import { CurrentWeather } from '../entitites/CurrentWeather.js';
import { WeatherDTO } from '../../infrastructure/dtos/WeatherDTO.js';
export declare class WeatherMapper {
    static fromWeather(weatherDTO: WeatherDTO): CurrentWeather;
}

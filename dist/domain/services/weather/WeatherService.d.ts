import { CurrentWeather } from '../../entitites/CurrentWeather.js';
export interface WeatherService {
    getCurrentWeather(): Promise<CurrentWeather>;
}

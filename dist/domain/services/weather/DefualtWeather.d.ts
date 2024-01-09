import { CurrentWeather } from '../../entitites/CurrentWeather.js';
import { WeatherService } from './WeatherService.js';
export declare class DefualtWeather implements WeatherService {
    getCurrentWeather(): Promise<CurrentWeather>;
    private getUserConfig;
}

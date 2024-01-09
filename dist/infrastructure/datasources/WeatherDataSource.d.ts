import { User } from '../../domain/entitites/User.js';
import { WeatherDTO } from '../dtos/WeatherDTO.js';
export declare class WeatherDataSource {
    private readonly BASE_URL;
    getCurrentWeather(user: User): Promise<WeatherDTO>;
}

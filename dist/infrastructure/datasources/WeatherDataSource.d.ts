import { User } from '../../domain/entitites/User.js';
import { WeatherDTOResponse } from '../dtos/WeatherDTOResponse.js';
export declare class WeatherDataSource {
    private readonly BASE_URL;
    getCurrentWeather(user: User): Promise<WeatherDTOResponse>;
}

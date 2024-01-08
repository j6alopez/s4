import { Weather } from '../entitites/Weather';
export declare class WeatherService {
    private readonly BASE_URL;
    getCurrentWeather(): Promise<Weather>;
    private getUserConfig;
}

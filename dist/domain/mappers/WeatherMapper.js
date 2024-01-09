import { CurrentWeather } from '../entitites/CurrentWeather.js';
export class WeatherMapper {
    static fromWeather(weatherDTO) {
        return new CurrentWeather(weatherDTO.current.condition.icon, weatherDTO.current.temp_c);
    }
}
//# sourceMappingURL=WeatherMapper.js.map
import { CurrentWeather } from '../entitites/CurrentWeather.js';
export class WeatherMapper {
    static fromWeather(weatherDTO) {
        const { current: { condition: { icon }, temp_c: temperature, }, } = weatherDTO;
        return new CurrentWeather(icon, temperature);
    }
}
//# sourceMappingURL=WeatherMapper.js.map
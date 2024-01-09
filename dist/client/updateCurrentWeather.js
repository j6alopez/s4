var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WeatherService } from '../domain/services/WeatherService';
export function updateCurrentWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        const weatherService = new WeatherService();
        const weather = yield weatherService.getCurrentWeather();
        upDateWeatherIcon(weather);
        upDateTemperature(weather);
    });
}
function upDateWeatherIcon(weather) {
    const icon = document.getElementById('weather-icon');
    if (icon) {
        icon.src = weather.current.condition.icon;
    }
}
function upDateTemperature(weather) {
    const temperatureInfo = document.getElementById('temperature-info');
    if (temperatureInfo) {
        temperatureInfo.src = `${weather.current.temp_c} ºC`;
    }
}
//# sourceMappingURL=updateCurrentWeather.js.map
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DefualtWeather } from '../domain/services/weather/DefualtWeather.js';
export function updateCurrentWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        const weatherService = new DefualtWeather();
        const currentWeather = yield weatherService.getCurrentWeather();
        upDateWeatherIcon(currentWeather);
        upDateTemperature(currentWeather);
    });
}
function upDateWeatherIcon(weather) {
    const icon = document.getElementById('weather-icon');
    if (icon) {
        icon.src = weather.icon;
    }
}
function upDateTemperature(weather) {
    const temperatureInfo = document.getElementById('temperature-info');
    if (temperatureInfo) {
        temperatureInfo.innerText = `${weather.temp_c} ºC`;
    }
}
//# sourceMappingURL=updateCurrentWeather.js.map
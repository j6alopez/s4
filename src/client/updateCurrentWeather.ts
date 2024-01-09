import {CurrentWeather} from '../domain/entitites/CurrentWeather.js';
import {DefualtWeather} from '../domain/services/weather/DefualtWeather.js';
import {WeatherService} from '../domain/services/weather/WeatherService.js';

export async function updateCurrentWeather(): Promise<void> {
  const weatherService: WeatherService = new DefualtWeather();
  const currentWeather: CurrentWeather = await weatherService.getCurrentWeather();
  upDateWeatherIcon(currentWeather);
  upDateTemperature(currentWeather);
}

function upDateWeatherIcon(weather: CurrentWeather): void {
  const icon: HTMLImageElement = document.getElementById('weather-icon') as HTMLImageElement;

  if (icon) {
    icon.src = weather.icon;
  }
}

function upDateTemperature(weather: CurrentWeather): void {
  const temperatureInfo: HTMLImageElement = document.getElementById('temperature-info') as HTMLImageElement;

  if (temperatureInfo) {
    temperatureInfo.innerText = `${weather.temp_c} ºC`;
  }
}

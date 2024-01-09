import {Weather} from '../domain/entitites/Weather.js';
import {WeatherService} from '../domain/services/WeatherService.js';

export async function updateCurrentWeather(): Promise<void> {
  const weatherService: WeatherService = new WeatherService();
  const weather: Weather = await weatherService.getCurrentWeather();
  upDateWeatherIcon(weather);
  upDateTemperature(weather);
}

function upDateWeatherIcon(weather: Weather): void {
  const icon: HTMLImageElement = document.getElementById('weather-icon') as HTMLImageElement;

  if (icon) {
    icon.src = weather.current.condition.icon;
  }
}

function upDateTemperature(weather: Weather): void {
  const temperatureInfo: HTMLImageElement = document.getElementById('temperature-info') as HTMLImageElement;

  if (temperatureInfo) {
    temperatureInfo.src = `${weather.current.temp_c} ºC`;
  }
}

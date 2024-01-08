import {Weather} from '../domain/entitites/Weather';
import {WeatherService} from '../domain/services/WeatherService';

export async function updateCurrentWeather(): Promise<void> {
  const weatherService: WeatherService = new WeatherService();
  const weather: Weather = await weatherService.getCurrentWeather();
}

function upDateWeatherIcon(weather: Weather): void {
  const icon: HTMLImageElement = document.getElementById('weather-icon') as HTMLImageElement;

  if (icon) {
    icon.src = weather.current.condition.icon;
  }
}

function upDateTemperature(weather: Weather): void {
  const icon: HTMLImageElement = document.getElementById('temperature-info') as HTMLImageElement;

  if (icon) {
    icon.src = weather.current.condition.icon;
  }
}

import {updateJoke} from './updateNextJoke.js';
import {updateCurrentWeather} from './updateCurrentWeather.js';

export function initializeContent() {
  updateCurrentWeather();
  updateJoke();
}

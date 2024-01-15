export class CurrentWeather {
  icon: string;
  temp_c: number;
  constructor(icon: string, temperature: number) {
    this.icon = icon;
    this.temp_c = temperature;
  }
}

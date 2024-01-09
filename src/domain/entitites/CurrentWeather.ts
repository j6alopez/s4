export class CurrentWeather {
  icon: string;
  temp_c: number;
  constructor(icon: string, temp_c: number) {
    this.icon = icon;
    this.temp_c = temp_c;
  }
}

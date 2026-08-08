export interface CurrentWeather {
  datetime: string;
  temp: number;
  feelslike: number;
  humidity: number;
  windspeed: number;
  conditions: string;
  description: string;
  icon: string;
}

export interface WeatherDay {
  datetime: string;
  tempmax: number;
  tempmin: number;
  conditions: string;
  description: string;
  icon: string;
  precipprob: number;
}

export interface WeatherResponse {
  resolvedAddress: string;
  timezone: string;
  currentConditions: CurrentWeather;
  days: WeatherDay[];
}

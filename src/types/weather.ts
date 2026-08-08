export interface WeatherCondition {
  datetime: string;
  temp: number;
  conditions: string;
  description: string;
  icon: string;
}

export interface WeatherResponse {
  resolvedAddress: string;
  timezone: string;
  currentConditions: WeatherCondition;
  days: WeatherDay[];
}

export interface WeatherDay {
  datetime: string;
  tempmax: number;
  tempmin: number;
  conditions: string;
  icon: string;
}

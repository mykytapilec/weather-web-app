import type { WeatherData } from '../types/weather.js';

export class WeatherService {
  async getWeather(city: string): Promise<WeatherData> {
    return {
      city,
      temperature: 0,
      description: 'Unknown',
    };
  }
}

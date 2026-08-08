import { env } from '../config/env';
import type { WeatherResponse } from '../types/weather';

export async function getWeather(city: string): Promise<WeatherResponse> {
  const url = `${env.weatherApiUrl}/${city}`;

  const params = new URLSearchParams({
    key: env.weatherApiKey,
    unitGroup: 'metric',
    contentType: 'json',
  });

  const response = await fetch(`${url}?${params.toString()}`);

  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }

  return response.json() as Promise<WeatherResponse>;
}

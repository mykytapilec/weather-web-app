import { useState } from 'react';
import { getWeather } from '../api/weather.api';
import type { WeatherResponse } from '../types/weather';

export function useWeather() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function searchWeather(city: string): Promise<void> {
    try {
      setLoading(true);
      setError(null);

      const data = await getWeather(city);

      setWeather(data);
    } catch {
      setError('Unable to load weather data');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  return {
    weather,
    loading,
    error,
    searchWeather,
  };
}

import type { WeatherResponse } from '../types/weather';
import { WeatherIcon } from './WeatherIcon';

interface WeatherCardProps {
  weather: WeatherResponse;
}

export function WeatherCard({ weather }: WeatherCardProps) {
  const current = weather.currentConditions;

  return (
    <section>
      <h2>{weather.resolvedAddress}</h2>

      <WeatherIcon icon={current.icon} />

      <p>{current.temp}°C</p>

      <p>Feels like: {current.feelslike}°C</p>

      <p>{current.conditions}</p>

      <p>Humidity: {current.humidity}%</p>

      <p>Wind: {current.windspeed} km/h</p>
    </section>
  );
}

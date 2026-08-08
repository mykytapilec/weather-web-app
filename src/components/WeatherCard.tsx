import type { WeatherResponse } from '../types/weather';

interface WeatherCardProps {
  weather: WeatherResponse;
}

export function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <section>
      <h2>{weather.resolvedAddress}</h2>

      <p>Temperature: {weather.currentConditions.temp}°C</p>

      <p>{weather.currentConditions.conditions}</p>
    </section>
  );
}

import type { WeatherDay } from '../types/weather';
import { WeatherIcon } from './WeatherIcon';

interface ForecastItemProps {
  day: WeatherDay;
}

export function ForecastItem({ day }: ForecastItemProps) {
  const date = new Date(day.datetime);

  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  return (
    <article>
      <h3>{formattedDate}</h3>

      <WeatherIcon icon={day.icon} />

      <p>
        {day.tempmin}°C - {day.tempmax}°C
      </p>

      <p>{day.conditions}</p>

      <p>Rain chance: {day.precipprob}%</p>
    </article>
  );
}

import type { WeatherDay } from '../types/weather';
import { ForecastItem } from './ForecastItem';

interface ForecastListProps {
  days: WeatherDay[];
}

export function ForecastList({ days }: ForecastListProps) {
  return (
    <section>
      <h2>Forecast</h2>

      <div>
        {days.slice(0, 5).map((day) => (
          <ForecastItem key={day.datetime} day={day} />
        ))}
      </div>
    </section>
  );
}

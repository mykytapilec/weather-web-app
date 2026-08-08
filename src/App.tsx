import { useState } from 'react';
import { getWeather } from './api/weather.api';
import type { WeatherResponse } from './types/weather';

function App() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSearch(): Promise<void> {
    try {
      setLoading(true);
      setError(null);

      const data = await getWeather('London');

      setWeather(data);
    } catch {
      setError('Unable to load weather data');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <h1>Weather Web App</h1>

      <button onClick={handleSearch}>Load Weather</button>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {weather && !loading && (
        <p>
          {weather.resolvedAddress}: {weather.currentConditions.temp}°C
        </p>
      )}
    </main>
  );
}

export default App;

import { useEffect } from 'react';
import { ErrorState } from './components/ErrorState';
import { ForecastList } from './components/ForecastList';
import { LoadingState } from './components/LoadingState';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { useWeather } from './hooks/useWeather';

function App() {
  const { weather, loading, error, searchWeather, lastCity } = useWeather();

  useEffect(() => {
    if (lastCity) {
      searchWeather(lastCity);
    }
  }, [lastCity, searchWeather]);

  return (
    <main>
      <h1>Weather Web App</h1>

      <SearchBar onSearch={searchWeather} />

      {loading && <LoadingState />}

      {error && <ErrorState message={error} />}

      {weather && !loading && (
        <>
          <WeatherCard weather={weather} />

          <ForecastList days={weather.days} />
        </>
      )}
    </main>
  );
}

export default App;

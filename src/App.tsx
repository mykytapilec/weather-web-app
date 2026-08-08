import { ErrorState } from './components/ErrorState';
import { LoadingState } from './components/LoadingState';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { useWeather } from './hooks/useWeather';

function App() {
  const { weather, loading, error, searchWeather } = useWeather();

  return (
    <main>
      <h1>Weather Web App</h1>

      <SearchBar onSearch={searchWeather} />

      {loading && <LoadingState />}

      {error && <ErrorState message={error} />}

      {weather && !loading && <WeatherCard weather={weather} />}
    </main>
  );
}

export default App;

import { useState } from 'react';
import type { FormEvent } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [city, setCity] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const trimmedCity = city.trim();

    if (!trimmedCity) {
      return;
    }

    onSearch(trimmedCity);
    setCity('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={city}
        onChange={(event) => setCity(event.target.value)}
        placeholder="Enter city"
      />

      <button type="submit">Search</button>
    </form>
  );
}

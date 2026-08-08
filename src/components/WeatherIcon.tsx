interface WeatherIconProps {
  icon: string;
}

const icons: Record<string, string> = {
  'clear-day': '☀️',
  'clear-night': '🌙',
  cloudy: '☁️',
  rain: '🌧️',
  snow: '❄️',
  fog: '🌫️',
  wind: '💨',
  'partly-cloudy-day': '⛅',
  'partly-cloudy-night': '☁️',
};

export function WeatherIcon({ icon }: WeatherIconProps) {
  return <span>{icons[icon] ?? '🌡️'}</span>;
}

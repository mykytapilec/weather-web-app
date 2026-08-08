export interface AppConfig {
  apiKey?: string;
  apiUrl: string;
}

export const env: AppConfig = {
  apiKey: process.env.WEATHER_API_KEY,
  apiUrl: process.env.WEATHER_API_URL ?? '',
};

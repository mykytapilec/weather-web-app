# Weather Web App

A modern weather application built with React, TypeScript, and Vite.  
The application allows users to search for a city and view current weather conditions together with a multi-day forecast.

The project was created as part of the roadmap.sh frontend projects collection.

## Project Links

- Roadmap.sh project:
  https://roadmap.sh/projects/weather-app

- GitHub repository:
  https://github.com/mykytapilec/weather-web-app

## Features

- Search weather by city name
- Display current weather conditions
- Display temperature and feels-like temperature
- Show humidity and wind speed
- Display multi-day weather forecast
- Weather condition icons
- Loading state handling
- Error handling
- Save the last searched city
- Automatically restore the last city after page reload
- Responsive layout

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- Visual Crossing Weather API
- ESLint
- Prettier

## API

Weather data is provided by Visual Crossing Weather API:

https://www.visualcrossing.com/weather-api

The application uses the API to fetch:

- Current weather conditions
- Daily forecast data
- Weather icons
- Temperature information

## Project Structure

```
src
├── api
│   └── weather.api.ts
├── components
│   ├── ErrorState.tsx
│   ├── ForecastItem.tsx
│   ├── ForecastList.tsx
│   ├── LoadingState.tsx
│   ├── SearchBar.tsx
│   ├── WeatherCard.tsx
│   └── WeatherIcon.tsx
├── config
│   └── env.ts
├── hooks
│   └── useWeather.ts
├── types
│   └── weather.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Installation

Clone the repository:

```bash
git clone https://github.com/mykytapilec/weather-web-app.git
```

Navigate to the project folder:

```bash
cd weather-web-app
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a local environment file:

```bash
cp .env.example .env
```

Add your Visual Crossing API key:

```env
VITE_WEATHER_API_KEY=your_api_key
VITE_WEATHER_API_URL=https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline
```

## Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Formatting

```bash
npm run format
```

Formats the project using Prettier.

### Type Checking and Linting

```bash
npm run check
```

Runs:

- TypeScript type checking
- ESLint validation

### Production Build

```bash
npm run build
```

Creates an optimized production build.

## Environment Notes

The `.env` file is ignored by Git and should never be committed because it contains private API credentials.

The repository includes `.env.example` as a template for required environment variables.

## Architecture

The application follows a component-based React architecture:

- Components handle UI rendering
- Custom hooks manage application logic
- API layer handles external requests
- Types provide TypeScript safety
- Configuration files manage environment settings

## Error Handling

The application handles:

- Invalid city searches
- API request failures
- Missing weather data
- Loading states

Users receive clear feedback when weather data cannot be loaded.

## Future Improvements

Possible improvements:

- Add hourly forecast
- Add weather animations
- Add unit switching (Celsius/Fahrenheit)
- Add geolocation support
- Add automated tests
- Deploy the application

## License

This project is created for educational purposes.

```

```

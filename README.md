## Weather App

A simple weather application where you can search by city name and see the current forecast.  
The user can search for a city, view current weather details, see search history, remove items and undo the last removal.

### Tech stack

- React + Vite
- TailwindCSS
- WeatherAPI (`https://www.weatherapi.com/`)

### Features

- Search weather by city name
- Display:
  - current temperature
  - weather description
  - minimum and maximum temperature for the day
  - wind speed
- Search history stored in `localStorage`
- Click on a history item to load its weather again
- Remove items from search history
- Undo after removing a history item

### Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root and add:

```bash
VITE_WEATHERAPI_KEY=your_api_key_here
```

You can get an API key on the WeatherAPI website.

### Development

```bash
npm run dev
```

After starting, the app will be available at `http://localhost:5173` (or the URL shown by Vite).

### Project structure (short)

- `src/pages/Home.jsx` – main page, state, search logic, integration with history
- `src/services/weatherApi.js` – WeatherAPI request, data normalization and error handling
- `src/hooks/useSearchHistory.js` – search history logic, stored in `localStorage`
- `src/components/WeatherCard.jsx` – weather details card
- `src/components/SearchHistory.jsx` – search history list
- `src/components/ui/Input.jsx`, `src/components/ui/Button.jsx` – simple UI components

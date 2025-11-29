import { WEATHER_API } from "../configs/api";

const API_KEY = import.meta.env.VITE_WEATHERAPI_KEY;

export const getWeatherByCity = async (city) => {
  if (!city.trim()) {
    throw new Error("Please enter a city name");
  }

  try {
    const response = await fetch(`${WEATHER_API}/current.json?key=${API_KEY}&q=${city}`);

    if (!response.ok) {
      if (response.status === 400) {
        throw new Error("City not found. Please check the spelling");
      }

      throw new Error("Unable to fetch weather data");
    }

    return await response.json();
  } catch (error) {
    console.error("WeatherAPI error:", error);
    throw error;
  }
};

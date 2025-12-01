import { WEATHER_API } from "../configs/api";

const API_KEY = import.meta.env.VITE_WEATHERAPI_KEY;

const ERROR_MESSAGES = {
  EMPTY_INPUT: "Please enter a city name",
  CITY_NOT_FOUND: "City not found. Please check the spelling",
  NETWORK_ERROR: "Network error. Please check your connection",
  GENERAL_ERROR: "Unable to fetch weather data",
};

export const getWeatherByCity = async (city) => {
  if (!city?.trim()) {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  }

  const trimmedCity = city.trim();

  try {
    const response = await fetch(`${WEATHER_API}/forecast.json?key=${API_KEY}&q=${trimmedCity}&days=1`);

    if (!response.ok) {
      if (response.status === 400) {
        throw new Error(ERROR_MESSAGES.CITY_NOT_FOUND);
      }

      throw new Error(ERROR_MESSAGES.GENERAL_ERROR);
    }

    const data = await response.json();

    return {
      location: {
        name: data.location.name,
        country: data.location.country,
      },
      current: {
        temp_c: data.current.temp_c,
        condition: {
          text: data.current.condition.text,
          icon: data.current.condition.icon,
        },
        wind_kph: data.current.wind_kph,
        temp_min: data.forecast.forecastday[0].day.mintemp_c,
        temp_max: data.forecast.forecastday[0].day.maxtemp_c,
      },
    };
  } catch (error) {
    if (error.message.includes("Failed to fetch")) {
      throw new Error(ERROR_MESSAGES.NETWORK_ERROR);
    }
    throw error;
  }
};

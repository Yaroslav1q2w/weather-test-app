import { useState } from "react";
import { Input } from "../components/ui/Input";
import Button from "../components/ui/Button";
import { getWeatherByCity } from "../services/weatherApi";
import { WeatherCard } from "../components/WeatherCard";
import { SearchHistory } from "../components/SearchHistory";
import { useSearchHistory } from "../hooks/useSearchHistory";

export const Home = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [removedCity, setRemovedCity] = useState(null);

  const { history, addToHistory, removeFromHistory } = useSearchHistory();

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    setWeather(null);
    setRemovedCity(null);

    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
      addToHistory(data.location.name);

      console.log("Weather ", data);
      console.log("History: ", history);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    await fetchWeather(city);
    setCity("");
  };

  const handleHistoryClick = async (city) => {
    await fetchWeather(city);
  };

  const handleRemove = (cityName) => {
    removeFromHistory(cityName);
    setRemovedCity(cityName);
  };

  const handleUndo = () => {
    if (removedCity) {
      addToHistory(removedCity);
      setRemovedCity(null);
    }
  };

  return (
    <div className="max-w-md p-4 mx-auto mt-10">
      <h1 className="mb-10 text-4xl text-[#facb7d] font-semibold">Weather App</h1>

      <form className="flex gap-2" onSubmit={handleSearch}>
        <Input value={city} onChange={(e) => setCity(e.target.value)} />
        <Button type="submit">Search</Button>
      </form>

      {loading && <p className="mt-4 text-gray-500">Loading...</p>}

      {error && <div className="p-3 mt-4 text-red-700 border border-red-200 rounded bg-red-50">{error}</div>}

      {weather && <WeatherCard data={weather} />}

      {history.length !== 0 && <SearchHistory history={history} onCityClick={handleHistoryClick} onRemove={handleRemove} />}

      {removedCity && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-3 rounded  flex items-center gap-3">
          <span>{removedCity} removed</span>
          <button onClick={handleUndo} className="px-3 py-1 bg-white text-gray-800 rounded">
            Undo
          </button>
          <button onClick={() => setRemovedCity(null)} className="text-gray-400">
            ×
          </button>
        </div>
      )}
    </div>
  );
};

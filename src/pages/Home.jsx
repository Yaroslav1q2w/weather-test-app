import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
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

  const { history, addToHistory, removeFromHistory, restoreToHistory } = useSearchHistory();

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    setWeather(null);
    setRemovedCity(null);

    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
      addToHistory(data.location.name);
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
    const index = history.findIndex((city) => city === cityName);

    removeFromHistory(cityName);
    setRemovedCity({ name: cityName, index });
  };

  const handleUndo = () => {
    if (removedCity) {
      restoreToHistory(removedCity.name, removedCity.index);
      setRemovedCity(null);
    }
  };

  return (
    <div className="max-w-md p-4 mx-auto mt-10">
      <h1 className="mb-10 text-4xl text-[#facb7d] font-semibold">Weather App</h1>

      <form className="flex gap-2" onSubmit={handleSearch}>
        <Input value={city} placeholder="Enter city name..." onChange={(e) => setCity(e.target.value)} />
        <Button className="px-6 py-2 text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600" onClick={handleSearch} type="submit">
          Search
        </Button>
      </form>

      {loading && (
        <div className="flex justify-center mt-6">
          <ClipLoader size={40} color="#facc6b" />
        </div>
      )}

      {error && <div className="p-3 mt-4 text-red-700 border border-red-300 rounded-lg bg-red-50">{error}</div>}

      {!loading && !error && !weather && (
        <div className="mt-7 text-center">
          <p className="text-gray-400">Enter a city name to see the weather forecast</p>
        </div>
      )}

      {weather && <WeatherCard data={weather} />}

      {history.length !== 0 && <SearchHistory history={history} onCityClick={handleHistoryClick} onRemove={handleRemove} />}

      {removedCity && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-3 rounded  flex items-center gap-3">
          <span>{removedCity.name} removed</span>
          <Button onClick={handleUndo} className="px-3 py-1 bg-white text-gray-800 rounded">
            Undo
          </Button>
          <button onClick={() => setRemovedCity(null)} className="text-gray-400">
            ×
          </button>
        </div>
      )}
    </div>
  );
};

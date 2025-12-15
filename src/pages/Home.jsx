import { useState } from "react";
import { BsCloud } from "react-icons/bs";
import { Input } from "../components/ui/Input";
import Button from "../components/ui/Button";
import { getWeatherByCity } from "../services/weatherApi";
import { WeatherCard } from "../components/WeatherCard";
import { WeatherCardSkeleton } from "../components/WeatherCardSkeleton";
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
    <div className="max-w-md p-4 mx-auto mt-10 mb-10">
      <div className="mb-10">
        <h1 className="text-4xl text-[#facb7d] font-bold tracking-tight">Weather App</h1>
        <p className="text-gray-400 text-sm mt-2">Check the weather in any city</p>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <form className="flex gap-3" onSubmit={handleSearch}>
            <Input value={city} placeholder="Enter city name..." onChange={(e) => setCity(e.target.value)} />
            <Button className="px-6 py-3 text-white font-medium transition-all duration-200 bg-linear-to-r from-blue-500 to-blue-600 rounded-xl hover:from-blue-600 hover:to-blue-700 hover:shadow-lg active:scale-95 whitespace-nowrap" onClick={handleSearch} type="submit">
              Search
            </Button>
          </form>

          {error && (
            <div className="p-4 mt-4 text-red-100 border border-red-400/30 rounded-xl bg-red-500/20 backdrop-blur-sm">
              <p className="font-medium">{error}</p>
            </div>
          )}
        </div>

        <div>
          {loading && <WeatherCardSkeleton />}

          {!loading && !error && !weather && (
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 h-[280px] flex flex-col items-center justify-center">
              <BsCloud className="w-16 h-16 mx-auto mb-3 text-gray-500" />
              <p className="text-gray-400 text-sm">Enter a city name to see the weather forecast</p>
            </div>
          )}

          {!loading && weather && <WeatherCard data={weather} />}
        </div>

        {history.length !== 0 && (
            <SearchHistory history={history} onCityClick={handleHistoryClick} onRemove={handleRemove} />
        )}
      </div>

      {removedCity && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800/95 backdrop-blur-sm text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-4 border border-gray-700  z-50">
          <span className="font-medium">{removedCity.name} removed</span>
          <Button onClick={handleUndo} className="px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium text-sm">
            Undo
          </Button>
          <button onClick={() => setRemovedCity(null)} className="text-gray-400 hover:text-gray-200 text-xl font-bold transition-colors">
            ×
          </button>
        </div>
      )}
    </div>
  );
};

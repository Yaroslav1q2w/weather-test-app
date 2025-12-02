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

  const { history, addToHistory } = useSearchHistory();

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

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
      setCity("");
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

      {history.length !== 0 && <SearchHistory history={history} />}
    </div>
  );
};

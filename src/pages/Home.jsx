import { useState } from "react";
import { Input } from "../components/ui/Input";
import Button from "../components/ui/Button";
import { getWeatherByCity } from "../services/weatherApi";

export const Home = () => {
  const [city, setCity] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!city.trim()) {
      console.log("Please enter a city name");
      return;
    }

    try {
      const data = await getWeatherByCity(city);
      console.log("Weather", data);
    } catch (err) {
      console.error("Error", err);
    }

    setCity("");
  };

  return (
    <div className="max-w-md p-4 mx-auto mt-10">
      <h1 className="mb-10 text-4xl text-[#facb7d] font-semibold">Weather App</h1>

      <form className="flex gap-2" onSubmit={handleSearch}>
        <Input value={city} onChange={(e) => setCity(e.target.value)} />
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
};

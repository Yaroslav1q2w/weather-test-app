import { useState } from "react";
import { Input } from "../components/ui/Input";
import Button from "../components/ui/Button";

export const Home = () => {
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("City:", city);
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

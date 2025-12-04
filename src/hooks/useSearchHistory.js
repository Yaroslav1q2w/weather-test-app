import { useState, useEffect } from "react";

const STORAGE_KEY = "weather_search_history";

export const useSearchHistory = () => {
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem(STORAGE_KEY);
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }, [history]);

  const addToHistory = (cityName) => {
    setHistory((prev) => {
      const filtered = prev.filter((city) => city.toLowerCase() !== cityName.toLowerCase());
      return [cityName, ...filtered].slice(0, 10);
    });
  };

  const removeFromHistory = (cityName) => {
    setHistory((prev) => prev.filter((city) => city !== cityName));
  };

  const restoreToHistory = (cityName, index) => {
    setHistory((prev) => {
      const newHistory = [...prev];
      newHistory.splice(index, 0, cityName);
      return newHistory;
    });
  };

  return {
    history,
    addToHistory,
    removeFromHistory,
    restoreToHistory,
  };
};

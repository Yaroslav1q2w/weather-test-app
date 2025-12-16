import { BsCloud } from "react-icons/bs";

export const WeatherEmptyState = () => {
  return (
    <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 h-[280px] flex flex-col items-center justify-center">
      <BsCloud className="w-16 h-16 mx-auto mb-3 text-gray-500" />
      <p className="text-gray-400 text-sm">Enter a city name to see the weather forecast</p>
    </div>
  );
};

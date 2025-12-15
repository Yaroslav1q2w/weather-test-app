export const WeatherCard = ({ data }) => {
  const { location, current } = data;

  return (
    <div className="px-5 py-4 bg-white rounded-2xl h-[280px] flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{location.name}</h2>
          <p className="text-xs text-gray-500 mt-0.5">{location.country}</p>
        </div>
        <div className="bg-blue-50 p-2 rounded-xl">
          <img src={current.condition.icon} alt={current.condition.text} className="w-12 h-12" />
        </div>
      </div>

      <div className="mb-4">
        <p className="text-4xl font-bold text-blue-500 bg-clip-text">{Math.round(current.temp_c)}°C</p>
        <p className="mt-1 text-base text-gray-600 font-medium">{current.condition.text}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-200 mt-auto">
        <div className="bg-gray-50 p-2.5 rounded-xl">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Min / Max</p>
          <p className="text-base font-bold text-gray-800">
            {Math.round(current.temp_min)}° / {Math.round(current.temp_max)}°
          </p>
        </div>
        <div className="bg-gray-50 p-2.5 rounded-xl">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Wind Speed</p>
          <p className="text-base font-bold text-gray-800">{Math.round(current.wind_kph)} km/h</p>
        </div>
      </div>
    </div>
  );
};

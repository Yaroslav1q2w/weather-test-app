export const WeatherCard = ({ data }) => {
  const { location, current, forecast } = data;

  return (
    <div className="px-6 py-4 bg-white rounded-lg  mt-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{location.name}</h2>
          <p className="text-sm text-gray-500">{location.country}</p>
        </div>
        <img src={current.condition.icon} alt={current.condition.text} className="w-14 h-14" />
      </div>

      <div className="mb-4">
        <p className="text-4xl font-bold text-gray-900">{Math.round(current.temp_c)}°C</p>
        <p className="mt-1 text-lg text-gray-600 ">{current.condition.text}</p>
      </div>

      <div className="flex justify-between gap-6 pt-4 text-sm ">
        <div>
          <p className="text-gray-500">Min / Max</p>
          <p className="font-semibold text-gray-800">
            {Math.round(forecast.forecastday[0].day.mintemp_c)}° / {Math.round(forecast.forecastday[0].day.maxtemp_c)}°
          </p>
        </div>
        <div>
          <p className="text-gray-500">Wind Speed</p>
          <p className="font-semibold text-gray-800">{Math.round(current.wind_kph)} km/h</p>
        </div>
      </div>
    </div>
  );
};

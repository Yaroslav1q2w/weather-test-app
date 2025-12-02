export const SearchHistory = ({ history, onCityClick }) => {
  return (
    <div className="mt-6">
      <h2 className="mb-3 font-semibold text-gray-400 text-lg">Search History</h2>
      <div className="space-y-2 flex flex-col">
        {history.map((city) => (
          <button key={city} type="button" onClick={() => onCityClick(city)} className="px-3 py-2 text-center bg-white rounded hover:bg-gray-200 cursor-pointer">
            <span className="text-black">{city}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

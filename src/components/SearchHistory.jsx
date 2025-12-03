export const SearchHistory = ({ history, onCityClick, onRemove }) => {
  return (
    <div className="mt-6">
      <h2 className="mb-3 font-semibold text-gray-500 text-lg">Search History</h2>
      <div className="space-y-2 flex flex-col">
        {history.map((city) => (
          <button key={city} type="button" onClick={() => onCityClick(city)} className="flex items-center justify-between w-full px-3 py-2.5 bg-white rounded hover:bg-gray-200 cursor-pointer">
            <span className="text-black flex-1 text-center">{city}</span>
            <span
              onClick={(e) => {
                e.stopPropagation();
                onRemove(city);
              }}
              className=" text-red-500">
              ×
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

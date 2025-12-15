export const SearchHistory = ({ history, onCityClick, onRemove }) => {
  return (
    <div>
      <h2 className="mb-4 font-semibold text-gray-400 text-sm uppercase tracking-wide">Search History</h2>
      <div className="space-y-2 flex flex-col">
        {history.map((city) => (
          <button key={city} type="button" onClick={() => onCityClick(city)} className="group flex items-center justify-between w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 cursor-pointer transition-all duration-200 border border-white/10 hover:border-white/20">
            <span className="text-gray-100 flex-1 text-left font-medium">{city}</span>
            <span
              onClick={(e) => {
                e.stopPropagation();
                onRemove(city);
              }}
              className="text-red-400 hover:text-red-300 text-xl font-bold transition-colors ml-3 w-6 h-6 flex items-center justify-center rounded-full hover:bg-red-400/20 pb-0.5">
              ×
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export const SearchHistory = ({ history }) => {
  return (
    <div className="mt-6">
      <h2 className="mb-3 font-semibold text-gray-400 text-lg">Search History</h2>
      <div className="space-y-2">
        {history.map((city) => (
          <div key={city} className="px-3 py-2 bg-white/90 rounded ">
            <p className="text-black">{city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

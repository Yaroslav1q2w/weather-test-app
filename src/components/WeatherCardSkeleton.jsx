export const WeatherCardSkeleton = () => {
  return (
    <div className="px-5 py-4 bg-linear-to-br from-white to-gray-50 rounded-2xl animate-pulse h-[280px] flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          <div className="h-7 bg-gray-200 rounded-lg w-28 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-20"></div>
        </div>
        <div className="bg-gray-200 p-2 rounded-xl w-12 h-12"></div>
      </div>

      <div className="mb-4">
        <div className="h-10 bg-gray-200 rounded-lg w-24 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-32"></div>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-200 mt-auto">
        <div className="bg-gray-100 p-2.5 rounded-xl">
          <div className="h-3 bg-gray-200 rounded w-16 mb-1"></div>
          <div className="h-4 bg-gray-200 rounded w-20"></div>
        </div>
        <div className="bg-gray-100 p-2.5 rounded-xl">
          <div className="h-3 bg-gray-200 rounded w-16 mb-1"></div>
          <div className="h-4 bg-gray-200 rounded w-20"></div>
        </div>
      </div>
    </div>
  );
};

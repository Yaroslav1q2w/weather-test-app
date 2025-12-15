export const Input = ({ placeholder, onChange, value }) => {
  return <input type="text" className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-200 text-gray-100 placeholder-gray-400 cursor-pointer" placeholder={placeholder} onChange={onChange} value={value} />;
};

export const Input = ({ placeholder, onChange, value }) => {
  return <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder={placeholder} onChange={onChange} value={value} />;
};

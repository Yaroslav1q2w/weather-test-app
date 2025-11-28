export const Input = ({ placeholder, onChange, value }) => {
  return <input type="text" className="w-full p-2 border rounded" placeholder={placeholder} onChange={onChange} value={value} />;
};

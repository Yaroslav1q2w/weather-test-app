export default function Button({ onClick, children }) {
  return (
    <button className="px-4 py-2 text-white transition-colors bg-blue-500 rounded" onClick={onClick}>
      {children}
    </button>
  );
}

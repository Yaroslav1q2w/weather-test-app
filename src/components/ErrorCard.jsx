import { BsExclamationCircle } from "react-icons/bs";

export const ErrorCard = ({ message }) => {
  return (
    <div className="text-center p-8 bg-red-500/10 backdrop-blur-sm rounded-xl border border-red-400/30 h-[280px] flex flex-col items-center justify-center">
      <BsExclamationCircle className="w-16 h-16 mx-auto mb-3 text-red-400" />
      <p className="text-red-200 font-medium text-base mb-1">Error</p>
      <p className="text-red-300 text-sm">{message}</p>
    </div>
  );
};

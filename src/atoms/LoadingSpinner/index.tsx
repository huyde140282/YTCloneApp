import { FaSpinner } from "react-icons/fa";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-start">
      <div
        data-testid="loading-spinner"
        className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"
      >
        <FaSpinner className="text-[#e74c3c]" />
      </div>
    </div>
  );
};

export default LoadingSpinner;

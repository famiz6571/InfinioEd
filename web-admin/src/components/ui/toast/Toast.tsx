import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import {
  HiCheckCircle,
  HiExclamationCircle,
  HiInformationCircle,
  HiX,
} from "react-icons/hi";

interface AppToastProps {
  show: boolean;
  message: string;
  type?: "success" | "error" | "info" | "warn";
  onClose: () => void;
}

const iconMap = {
  success: <HiCheckCircle className="h-6 w-6 text-green-500" />,
  error: <HiExclamationCircle className="h-6 w-6 text-red-500" />,
  info: <HiInformationCircle className="h-6 w-6 text-blue-500" />,
  warn: <FaExclamationTriangle className="h-6 w-6 text-yellow-500" />,
};

const AppToast: React.FC<AppToastProps> = ({
  show,
  message,
  type = "info",
  onClose,
}) => {
  if (!show) return null;

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[999999999]">
      <div className="flex items-center max-w-md w-fit p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
        {iconMap[type]}
        <div className="ml-4 text-base font-medium max-w-xs sm:max-w-md break-words text-gray-900 dark:text-white">
          {message}
        </div>
        <button
          onClick={onClose}
          className="ml-4 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
        >
          <HiX className="h-5 w-5 text-gray-500 dark:text-gray-300" />
        </button>
      </div>
    </div>
  );
};

export default AppToast;

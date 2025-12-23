import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`
        relative flex items-center justify-center
        w-16 h-8 rounded-full p-1
        bg-gray-300 dark:bg-gray-700
        transition-colors duration-300
        cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-indigo-500
      `}
    >
      {/* Sliding dot */}
      <span
        className={`
          absolute top-1 left-1 w-6 h-6 rounded-full
          bg-white dark:bg-yellow-400
          transform transition-transform duration-300
          ${isDark ? "translate-x-8" : "translate-x-0"}
          flex items-center justify-center
        `}
      >
        {/* Icon inside dot */}
        {isDark ? (
          <Moon className="w-4 h-4 text-gray-900" />
        ) : (
          <Sun className="w-4 h-4 text-yellow-500" />
        )}
      </span>
    </button>
  );
};

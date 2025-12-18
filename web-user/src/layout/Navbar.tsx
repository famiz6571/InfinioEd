// src/layout/Navbar.tsx
import type { FC } from "react";
import { useState, useEffect } from "react";

const Navbar: FC = () => {
  const [isDark, setIsDark] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <header className="bg-blue-600 dark:bg-gray-900 text-white p-4 transition-colors duration-300">
      <nav className="container mx-auto flex justify-between items-center">
        <span className="font-bold">MyApp</span>
        <ul className="flex gap-4 items-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300"
            >
              {isDark ? "Light" : "Dark"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

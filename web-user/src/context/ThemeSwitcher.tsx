import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

const themes = [
  { id: 1, disp: "OCEAN_BREEZE", icon: "mdi:wave", name: "Ocean" },
  { id: 2, disp: "SUNSET_MEADOW", icon: "mdi:weather-sunset", name: "Sunset" },
  { id: 3, disp: "CORAL_HORIZON", icon: "mdi:terrain", name: "Coral" },
  { id: 4, disp: "FOREST_MIST", icon: "mdi:pine-tree", name: "Forest" },
  {
    id: 5,
    disp: "GOLDEN_HARVEST",
    icon: "mdi:silverware-fork-knife",
    name: "Harvest",
  },
  { id: 6, disp: "MIDNIGHT_GLIMMER", icon: "mdi:star", name: "Glimmer" },
  { id: 7, disp: "MINT_GROVE", icon: "mdi:leaf", name: "Mint" },
  { id: 8, disp: "PASTEL_DREAM", icon: "mdi:palette", name: "Pastel" },
  {
    id: 9,
    disp: "BLUE_HORIZON",
    icon: "mdi:lightbulb-on-outline",
    name: "Horizon",
  },
  { id: 10, disp: "SOFT_RAYS", icon: "mdi:weather-sunny", name: "Rays" },
  { id: 11, disp: "SPIRAL_SPOTIFY", icon: "mdi:spotify", name: "Spiral" },
  { id: 12, disp: "FLARE_VALOR", icon: "mdi:fire", name: "Flare" },
  { id: 13, disp: "CODE_NIGHT", icon: "mdi:code-tags", name: "Code" },
];

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("OCEAN_BREEZE");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("data-color-theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-color-theme", saved);
    } else {
      localStorage.setItem("data-color-theme", "OCEAN_BREEZE");
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (id: string) => {
    setTheme(id);
    localStorage.setItem("data-color-theme", id);
    document.documentElement.setAttribute("data-color-theme", id);
    setOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg  bg-white text-gray-800 hover:bg-gray-100  dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700   transition-colors"
      >
        <Icon icon="mdi:palette" width="22" />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute  right-0 mt-2  
        w-fit max-h-72 overflow-y-auto no-scrollbar bg-white dark:bg-gray-dark
         rounded-lg shadow-lg  ring-1 ring-black/5 z-999"
        >
          <div className="py-1">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => handleChange(t.disp)}
                className={`
                  flex items-center w-full px-3 py-2 text-sm text-left
                  border-0 
                  ${
                    theme === t.disp
                      ? "font-bold text-primary bg-primary/10"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:text-white/90 dark:hover:bg-white/5"
                  }
                `}
              >
                <Icon icon={t.icon} width="18" className="mr-2" />
                {t.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

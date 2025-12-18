import React, { useState, useEffect, useMemo, useRef } from "react";
import { ChevronDown, X } from "lucide-react";
import Label from "../form/Label";
import { allIcons } from "../../utils/allIcons";

const PAGE_SIZE = 200;

interface UnifiedIconPickerProps {
  label?: string;
  placeholder?: string;
  value?: string | null;
  onChange?: (iconName: string | null) => void;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  success?: boolean;
  className?: string;
}

const UnifiedIconPicker: React.FC<UnifiedIconPickerProps> = ({
  label = "Select Icon",
  placeholder = "Choose an icon",
  value,
  onChange,
  required,
  error,
  disabled = false,
  success = false,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 200);
    return () => clearTimeout(timer);
  }, [query]);

  const iconNames = useMemo(() => Object.keys(allIcons), []);
  const filteredIcons = useMemo(
    () =>
      iconNames.filter((name) =>
        name.toLowerCase().includes(debouncedQuery.toLowerCase())
      ),
    [iconNames, debouncedQuery]
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (iconName: string) => {
    onChange?.(iconName);
    setIsOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.(null);
    setQuery("");
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const bottom =
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop <=
      e.currentTarget.clientHeight + 100;
    if (bottom && visibleCount < filteredIcons.length) {
      setVisibleCount((prev) =>
        Math.min(prev + PAGE_SIZE, filteredIcons.length)
      );
    }
  };

  const visibleIcons = filteredIcons.slice(0, visibleCount);

  let inputClasses = `h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs focus:outline-hidden flex items-center gap-2 cursor-pointer bg-transparent text-gray-800 dark:text-white/90 placeholder:text-gray-400 dark:placeholder:text-gray-500 ${className}`;
  if (disabled) {
    inputClasses +=
      " text-gray-500 border-gray-300 opacity-40 bg-gray-100 cursor-not-allowed dark:bg-gray-800 dark:text-white/90 dark:border-gray-700";
  } else if (error) {
    inputClasses +=
      " border-error-500 focus:border-error-300 focus:ring-error-500/20 dark:text-error-400 dark:border-error-500 dark:focus:border-error-800";
  } else if (success) {
    inputClasses +=
      " border-success-500 focus:border-success-300 focus:ring-success-500/20 dark:text-success-400 dark:border-success-500 dark:focus:border-success-800";
  } else {
    inputClasses +=
      " border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:focus:border-brand-800";
  }

  return (
    <div className="space-y-2" ref={dropdownRef}>
      {label && (
        <Label>
          {label}
          {required && <span className="text-red-500"> *</span>}
        </Label>
      )}

      <div className="relative w-full">
        <div
          className={inputClasses}
          onClick={() => !disabled && setIsOpen((prev) => !prev)}
        >
          {value && allIcons[value as keyof typeof allIcons] ? (
            <div className="flex items-center gap-2">
              {React.createElement(allIcons[value as keyof typeof allIcons], {
                size: 20,
              })}
              <span className="truncate text-gray-800 dark:text-white/90 text-sm">
                {value}
              </span>
            </div>
          ) : (
            <span className="text-gray-400 dark:text-gray-400">
              {placeholder}
            </span>
          )}

          <div className="flex-grow" />
          {value && !disabled && (
            <button
              type="button"
              onClick={handleClear}
              className="text-gray-400 hover:text-red-500 dark:hover:text-red-500"
              title="Clear"
            >
              <X size={14} />
            </button>
          )}
          <ChevronDown
            className={`text-gray-400 dark:text-gray-400 transition-transform duration-150 ${
              isOpen ? "rotate-180" : ""
            }`}
            size={16}
          />
        </div>

        {isOpen && !disabled && (
          <div className="absolute mt-1 w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg z-50">
            <input
              autoFocus
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisibleCount(PAGE_SIZE);
              }}
              className="h-10 w-full px-3 text-sm border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-brand-300 focus:ring-brand-500/20 placeholder-gray-400 dark:placeholder-gray-500"
            />

            <div
              className="max-h-56 overflow-auto p-2 grid grid-cols-6 gap-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600"
              onScroll={handleScroll}
            >
              {visibleIcons.length > 0 ? (
                visibleIcons.map((name) => {
                  const IconComponent = allIcons[name as keyof typeof allIcons];
                  if (!IconComponent) return null; // SAFETY CHECK
                  return (
                    <button
                      key={name}
                      onClick={() => handleSelect(name)}
                      className={`flex flex-col items-center justify-center w-12 h-12 rounded-md border hover:bg-brand-100 dark:hover:bg-brand-700 text-[10px] ${
                        value === name
                          ? "bg-brand-100 dark:bg-brand-700 border-brand-400"
                          : "border-transparent"
                      }`}
                    >
                      <IconComponent size={20} />
                      <span className="truncate w-full text-[10px] text-gray-600 dark:text-gray-300">
                        {name}
                      </span>
                    </button>
                  );
                })
              ) : (
                <div className="col-span-6 text-center text-gray-500 dark:text-gray-400 py-3 text-sm">
                  No icons found
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {error && <p className="mt-1.5 text-xs text-error-500">{error}</p>}
    </div>
  );
};

export default UnifiedIconPicker;

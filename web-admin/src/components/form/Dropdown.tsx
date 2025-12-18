import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Label from "./Label";
import { UseFormRegisterReturn } from "react-hook-form";

export interface Option {
  label: string;
  value: string | number;
}

interface DropdownProps {
  id: string;
  label: string;
  options: Option[];
  value?: string | number;
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (value: string | number | null) => void;
  searchable?: boolean;
  clearable?: boolean;
  register?: UseFormRegisterReturn;
}

const Dropdown: React.FC<DropdownProps> = ({
  id,
  label,
  options,
  value,
  placeholder = "Select...",
  error,
  required = false,
  disabled = false,
  onChange,
  searchable = true,
  clearable = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState<Option | null>(
    options.find((o) => o.value === value) || null
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelected(options.find((o) => o.value === value) || null);
  }, [value, options]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredOptions = options.filter((o) =>
    o.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option: Option) => {
    setSelected(option);
    onChange?.(option.value);
    setIsOpen(false);
    setSearchTerm("");
  };

  const handleClear = () => {
    setSelected(null);
    onChange?.(null);
    setSearchTerm("");
  };

  // Input-like styling
  let inputClasses = `h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/90`;

  if (disabled) {
    inputClasses += ` text-gray-500 border-gray-300 opacity-40 bg-gray-100 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700`;
  } else if (error) {
    inputClasses += ` border-error-500 focus:border-error-300 focus:ring-error-500/20 dark:text-error-400 dark:border-error-500 dark:focus:border-error-800`;
  } else {
    inputClasses += ` bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800`;
  }

  return (
    <div className="space-y-2 relative w-full" ref={dropdownRef}>
      <Label htmlFor={id}>
        {label}
        {required && <span className="text-red-500"> *</span>}
      </Label>

      <div
        className={`${inputClasses} relative flex justify-between items-center cursor-pointer`}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
      >
        <span
          className={`${
            selected ? "text-gray-800" : "text-gray-400"
          } dark:text-white/80`}
        >
          {selected ? selected.label : placeholder}
        </span>

        <div className="flex items-center space-x-2">
          {clearable && selected && !disabled && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleClear();
              }}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
          <ChevronDown
            size={20}
            className={`text-gray-400 transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg max-h-60 overflow-auto">
          {searchable && (
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-700 text-sm placeholder:text-gray-400 dark:placeholder:text-white/90 focus:outline-hidden"
            />
          )}

          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option)}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 text-sm ${
                  selected?.value === option.value
                    ? "bg-gray-100 dark:bg-gray-800"
                    : ""
                }`}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-400 dark:text-gray-500 text-sm">
              No options found
            </div>
          )}
        </div>
      )}

      {error && <p className="text-error-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Dropdown;

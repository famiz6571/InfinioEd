import React, { useState, useRef, useEffect } from "react";
import { DropdownOption } from "../../types/countries";

interface CountrySelectProps {
  countries: DropdownOption[];
  selectedCountry?: string;
  handleCountryChange?: (option: DropdownOption) => void;
  disabled?: boolean;
  emitOnValue?: boolean;
  countryError?: string;
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  countries,
  selectedCountry,
  handleCountryChange,
  disabled = false,
  emitOnValue,
  countryError,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedOption = countries.find((c) => c.meta?.phoneCode === selectedCountry);

  const hasEmitted = useRef(false);

  useEffect(() => {
    if (!emitOnValue || !selectedCountry || hasEmitted.current) return;

    const selected = countries.find((o) => o.meta?.phoneCode === selectedCountry);
    if (selected) {
      handleCountryChange?.(selected);
      hasEmitted.current = true;
    }
  }, [emitOnValue, selectedCountry, countries, handleCountryChange]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  let buttonClasses = `
    h-11 w-full rounded-l-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs 
    placeholder:text-gray-400 focus:outline-hidden focus:ring-3
    dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/90 text-left 
    whitespace-nowrap overflow-hidden text-ellipsis
  `;

  if (disabled) {
    buttonClasses += ` text-gray-500 border-gray-300 opacity-40 bg-gray-100 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700 opacity-40`;
  } else if (countryError) {
    buttonClasses += `  border-error-500 focus:border-error-300 focus:ring-error-500/20 dark:text-error-400 dark:border-error-500 dark:focus:border-error-800`;
  } else {
    buttonClasses += ` bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800`;
  }

  return (
    <div className="relative w-32" ref={ref}>
      {/* Button */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className={buttonClasses}
      >
        {selectedOption
          ? `${selectedOption.meta?.phoneCode} (${selectedOption.meta?.abbreviation})`
          : "Select"}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul
          style={{
            width: ref.current?.offsetWidth,
            left: ref.current?.getBoundingClientRect().left,
            top: ref.current?.getBoundingClientRect().bottom,
            position: "fixed",
          }}
          className=" mt-1 max-h-40 w-full overflow-y-auto rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 z-10 no-scrollbar shadow-lg"
        >
          {countries.map((country, index) => (
            <li
              key={index}
              onClick={() => {
                handleCountryChange?.(country);
                setIsOpen(false);
              }}
              className="cursor-pointer select-none px-4 py-2 text-sm text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {country.meta?.phoneCode} ({country.meta?.abbreviation})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountrySelect;

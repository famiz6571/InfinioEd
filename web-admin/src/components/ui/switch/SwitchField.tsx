import React from "react";
import Label from "../../form/Label";

interface SwitchFieldProps {
  id: string;
  label: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  color?: "blue" | "gray"; // added color theme option
}

const SwitchField: React.FC<SwitchFieldProps> = ({
  id,
  label,
  checked = false,
  onChange,
  required,
  error,
  disabled,
  color = "blue", // default theme
}) => {
  // theme styles (inspired by second code)
  const switchColors =
    color === "blue"
      ? {
          background: checked ? "bg-brand-500" : "bg-gray-200 dark:bg-white/10",
          knob: checked
            ? "translate-x-full bg-white"
            : "translate-x-0 bg-white",
        }
      : {
          background: checked
            ? "bg-gray-800 dark:bg-white/10"
            : "bg-gray-200 dark:bg-white/10",
          knob: checked
            ? "translate-x-full bg-white"
            : "translate-x-0 bg-white",
        };

  return (
    <div className="col-span-1">
      {/* Label */}
      <div className="mb-2 flex items-center gap-1">
        <Label htmlFor={id}>{label}</Label>
        {required && <span className="text-red-500">*</span>}
      </div>

      {/* Switch */}
      <button
        type="button"
        id={id}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={`relative inline-flex h-6 w-11 rounded-full transition duration-150 ease-linear focus:outline-none ${
          disabled
            ? "bg-gray-100 pointer-events-none dark:bg-gray-800 opacity-50"
            : switchColors.background
        }`}
      >
        <span
          className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full shadow-theme-sm transform duration-150 ease-linear ${switchColors.knob}`}
        />
      </button>

      {/* Error */}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default SwitchField;

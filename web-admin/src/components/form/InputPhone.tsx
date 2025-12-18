import React from "react";
import Label from "./Label";
import { UseFormRegisterReturn } from "react-hook-form";
import Input from "./input/InputField";
import CountrySelect from "./CountrySelect";
import { DropdownOption } from "../../types/countries";

interface InputPhoneFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string; // handled inside Input
  required?: boolean;
  readOnly?: boolean;
  autoComplete?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register?: UseFormRegisterReturn;
  mode: string | null;
  countries: DropdownOption[];
  handleCountryChange?: (option: DropdownOption) => void;
  selectedCountry?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  emitOnValue?: boolean;
  countryError?: string;
}

const InputPhoneField: React.FC<InputPhoneFieldProps> = ({
  id,
  label,
  type = "text",
  placeholder = "",
  error,
  required,
  readOnly = false,
  autoComplete = "off",
  disabled = false,
  onChange,
  register,
  mode,
  countries,
  handleCountryChange,
  selectedCountry,
  minLength,
  maxLength = 255,
  min,
  max,
  emitOnValue,
  countryError,
}) => (
  <div className="space-y-2 w-full">
    <Label htmlFor={id}>
      {label}
      {required && <span className="text-red-500"> *</span>}
    </Label>

    {mode === "phone" ? (
      <div className="flex w-full">
        <CountrySelect
          countryError={countryError}
          emitOnValue={emitOnValue}
          countries={countries}
          selectedCountry={selectedCountry}
          handleCountryChange={handleCountryChange}
          disabled={readOnly}
        />

        {/* Input is always rendered, full width if no select */}
        <Input
          type={type}
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          readOnly={readOnly}
          autoComplete={autoComplete}
          register={register}
          error={!!error}
          hint={error}
          className=" w-full flex-1 rounded-l-none "
          autoFocus={true}
          minLength={minLength}
          maxLength={maxLength}
          min={min}
          max={max}
        />
      </div>
    ) : (
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        readOnly={readOnly}
        autoComplete={autoComplete}
        register={register}
        error={!!error}
        hint={error}
        className="w-full"
        autoFocus={true}
        minLength={minLength}
        maxLength={maxLength}
        min={min}
        max={max}
      />
    )}
  </div>
);

export default InputPhoneField;

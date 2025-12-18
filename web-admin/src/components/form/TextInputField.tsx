import React from "react";
import Label from "./Label";
import Input from "./input/InputField";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextInputFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  readOnly?: boolean;
  autoComplete?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register?: UseFormRegisterReturn;
  value?: string | number;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

const TextInputField: React.FC<TextInputFieldProps> = ({
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
  value,
  minLength,
  maxLength = 255,
  min,
  max,
}) => (
  <div className="space-y-6">
    <Label htmlFor={id}>
      {label}
      {required && <span className="text-red-500"> *</span>}
    </Label>
    <Input
      type={type}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      readOnly={readOnly}
      autoComplete={autoComplete}
      register={register}
      value={value}
      hint={error}
      error={!!error}
      minLength={minLength}
      maxLength={maxLength}
      min={min}
      max={max}
    />
  </div>
);

export default TextInputField;

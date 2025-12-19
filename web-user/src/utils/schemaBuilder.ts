import { z, ZodObject, type ZodTypeAny } from "zod";
import { type CountryCode, parsePhoneNumberFromString } from "libphonenumber-js";

export type FieldType =
  | "string"
  | "number"
  | "email"
  | "password"
  | "confirmPassword"
  | "phone"
  | "pin"
  | "accountNumber"
  | "confirmAccountNumber"
  | "ifsc"
  | "fileArray"
  | "boolean"
  | "date"
  | "username"
  | "country"
  | "amount"
  | "dob"
  | "array";

export interface FieldDefinition {
  type: FieldType;
  required?: boolean;
  label?: string;
}

interface PasswordData {
  password?: string;
  confirmPassword?: string;
}

interface AccountData {
  accountNumber?: string;
  confirmAccountNumber?: string;
}

interface PhoneData {
  phone?: string;
  abbreviation?: CountryCode;
}

interface DobData {
  birthDate?: string;
  ageLimit?: string;
}

export function buildSchema(
  fields: Record<string, FieldDefinition>
): ZodObject<Record<string, ZodTypeAny>> {
  // Explicitly mutable object type
  const shape: Record<string, ZodTypeAny> = {};

  for (const [key, def] of Object.entries(fields)) {
    let schema: ZodTypeAny;

    switch (def.type) {
      case "string":
        schema =
          def.required === false
            ? z.string().optional()
            : z.string().nonempty(`${def.label || key} is required`);
        break;

      case "number":
        schema = def.required === false ? z.number().optional() : z.number();
        break;

      case "email":
        schema =
          def.required === false
            ? z.string().optional()
            : z
                .string()
                .nonempty(`${def.label || key} is required`)
                .email(`${def.label || key} must be valid`);
        break;

      case "password":
        schema =
          def.required === false
            ? z
                .string()
                .optional()
                .refine((val) => !val || val.length >= 6, {
                  message: `${def.label || key} must be at least 6 characters`,
                })
            : z
                .string()
                .min(6, `${def.label || key} must be at least 6 characters`);
        break;

      case "confirmPassword":
        schema = def.required === false ? z.string().optional() : z.string();
        break;

      case "phone":
        schema =
          def.required === false
            ? z.string().optional()
            : z
                .string()
                .nonempty(`${def.label || key} is required`)
                .regex(/^\d+$/, `${def.label || key} must be a number`);
        break;

      case "pin":
        schema =
          def.required === false
            ? z
                .string()
                .transform((val) => (val === "" ? undefined : val))
                .optional()
                .refine(
                  (val) => !val || /^\d{6}$/.test(val),
                  `${def.label || key} must be exactly 6 digits`
                )
            : z
                .string()
                .nonempty(`${def.label || key} is required`)
                .regex(
                  /^\d{6}$/,
                  `${def.label || key} must be exactly 6 digits`
                );
        break;
      case "accountNumber": {
        const accountNumberSchema = z.string();
        schema =
          def.required !== false
            ? z
                .string()
                .nonempty(`${def.label || key} is required`)
                .regex(
                  /^\d{8,14}$/,
                  `${def.label || key} must be 8 to 14 digits`
                )
            : accountNumberSchema;
        break;
      }

      case "confirmAccountNumber":
        schema = z.string();
        break;

      case "date":
        schema = z.string();
        break;

      case "ifsc": {
        const ifscSchema = z.string();
        schema =
          def.required !== false
            ? z
                .string()
                .regex(
                  /^[A-Z]{4}0[A-Z0-9]{6}$/,
                  `${def.label || key} is invalid`
                )
            : ifscSchema;
        break;
      }

      case "fileArray": {
        const fileArraySchema = z.array(z.instanceof(File));
        schema =
          def.required !== false
            ? fileArraySchema.min(
                1,
                `${def.label || key} must include at least one file`
              )
            : fileArraySchema;
        break;
      }

      case "boolean":
        schema = def.required === false ? z.boolean().optional() : z.boolean();
        break;

      case "username":
        schema =
          def.required === false
            ? z.string().optional()
            : z
                .string()
                .nonempty(`${def.label || key} is required`)
                .min(3, `${def.label || key} must be at least 3 characters`)
                .max(20, `${def.label || key} must be at most 20 characters`)
                .regex(
                  /^[a-zA-Z0-9_]+$/,
                  `${
                    def.label || key
                  } can only contain letters, numbers, and underscores`
                );
        break;
      case "country":
        schema =
          def.required === false
            ? z.string().optional()
            : z.string().nonempty(`${def.label || key} is required`);
        break;
      case "amount":
        schema =
          def.required === false
            ? z
                .string()
                .regex(
                  /^\d+(\.\d+)?$/,
                  `${def.label || key} must be a valid number`
                )
                .optional()
                .refine((val) => !val || parseFloat(val) > 0, {
                  message: `${def.label || key} must be greater than 0`,
                })
            : z
                .string()
                .nonempty(`${def.label || key} is required`)
                .regex(
                  /^\d+(\.\d+)?$/,
                  `${def.label || key} must be a valid number`
                )
                .refine((val) => parseFloat(val) > 0, {
                  message: `${def.label || key} must be greater than 0`,
                });
        break;
      case "dob":
        schema =
          def.required === false
            ? z.string().optional()
            : z.string().nonempty(`${def.label || key} is required`);
        break;
      case "array": {
        schema =
          def.required === false
            ? z.array(z.string()).optional()
            : z.array(z.string()).nonempty(`${def.label || key} is required`);
        break;
      }

      default:
        schema = def.required === false ? z.unknown().optional() : z.unknown();
        break;
    }

    shape[key] = schema;
  }

  let schema = z.object(shape);

  // Password match
  if ("password" in fields && "confirmPassword" in fields) {
    schema = schema.refine(
      (data) =>
        (data as PasswordData).password ===
        (data as PasswordData).confirmPassword,
      { path: ["confirmPassword"], message: "Passwords do not match" }
    );
  }

  // Account number match
  if ("accountNumber" in fields && "confirmAccountNumber" in fields) {
    schema = schema.refine(
      (data) =>
        (data as AccountData).accountNumber ===
        (data as AccountData).confirmAccountNumber,
      {
        path: ["confirmAccountNumber"],
        message: "Account numbers do not match",
      }
    );
  }

  if ("phone" in fields && "abbreviation" in fields) {
    schema = schema.refine(
      (data: PhoneData) => {
        const phone = data.phone;
        const country = data.abbreviation || "AE";
        if (!phone) return true; // allow empty if optional
        const phoneNumber = parsePhoneNumberFromString(phone, country);
        return phoneNumber?.isValid() ?? false;
      },
      { path: ["phone"], message: "Invalid phone number for selected country" }
    );
  }

  if ("birthDate" in fields && "ageLimit" in fields) {
    schema = schema.refine((data: DobData) => {
      const { birthDate, ageLimit } = data;
      if (!birthDate) return true;

      const date = new Date(birthDate);
      if (isNaN(date.getTime())) return false;

      const today = new Date();
      const requiredAge = Number(ageLimit) || 18;

      let age = today.getFullYear() - date.getFullYear();
      const m = today.getMonth() - date.getMonth();
      const d = today.getDate() - date.getDate();
      if (m < 0 || (m === 0 && d < 0)) age--;

      if (age < requiredAge) {
        throw new z.ZodError([
          {
            code: "custom",
            path: ["birthDate"],
            message: `You must be at least ${requiredAge} years old`,
          },
        ]);
      }

      return true;
    });
  }

  return schema;
}

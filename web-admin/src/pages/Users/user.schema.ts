import { buildSchema, FieldDefinition } from "../../utils/schemaBuilder";

const adminuserfields = (isEdit: boolean): Record<string, FieldDefinition> => ({
  userName: { type: "username", label: "User Name" },
  name: { type: "string", label: "Full Name" },
  email: { type: "email", label: "Email" },
  password: { type: "password", required: !isEdit, label: "Password" },
  confirmPassword: {
    type: "confirmPassword",
    required: !isEdit,
    label: "Confirm Password",
  },
  abbreviation: { type: "country", required: false },
  phone: { type: "phone", label: "Phone Number" },
  phoneCode: { type: "string", label: "Country" },
  isActive: { type: "boolean", label: "Active" },
  country: { type: "string", label: "Country" },
  language: { type: "string", label: "Language" },
  dateOfBirth: { type: "date", label: "Date of Birth", required: false },
  roleId: { type: "string", label: "Role", required: true },
});

export const getUserSchema = (isEdit: boolean) => {
  const baseSchema = buildSchema(adminuserfields(isEdit));

  return baseSchema;
};

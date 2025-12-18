import { buildSchema, FieldDefinition } from "../../utils/schemaBuilder";

const roleFields = (): Record<string, FieldDefinition> => ({
  roleName: { type: "string", label: "Role Name", required: true },
  description: { type: "string", label: "Description", required: false },
  isActive: { type: "boolean", label: "Active", required: true },
  menuIds: { type: "array", label: "Menus" },
});

export const getRoleSchema = () => buildSchema(roleFields());

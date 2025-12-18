import { buildSchema, FieldDefinition } from "../../utils/schemaBuilder";

const menuFields = (): Record<string, FieldDefinition> => ({
  name: { type: "string", label: "Menu Name" },
  path: { type: "string", required: false, label: "Route Path" },
  icon: { type: "string", label: "Iconify Icon" },
  order: { type: "number", required: false, label: "Display Order" },
  isActive: { type: "boolean", label: "Active" },
  parentId: { type: "string", required: false, label: "Parent Menu" },
});

export const getMenuSchema = () =>
  buildSchema(menuFields());

import { buildSchema, FieldDefinition } from "../../utils/schemaBuilder";

const bankFields = (): Record<string, FieldDefinition> => ({
  studentId: { type: "string", label: "Student", required: true },
  bankName: { type: "string", label: "Bank Name" },
  accountHolderName: { type: "string", label: "Account Holder" },
  accountNumber: { type: "accountNumber", label: "Account Number" },
  ifscCode: { type: "ifsc", label: "IFSC" },
  branchName: { type: "string", label: "Branch Name" },
  accountType: { type: "string", label: "Account Type" },
  isPrimary: { type: "boolean", label: "Primary Account" },
  isActive: { type: "boolean", label: "Active" },
});

export const getBankAccountSchema = () => buildSchema(bankFields());

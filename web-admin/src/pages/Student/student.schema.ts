import { buildSchema, FieldDefinition } from "../../utils/schemaBuilder";

const studentFields = (isEdit: boolean): Record<string, FieldDefinition> => ({
  admissionNo: { type: "string", label: "Admission No"},
  fullName: { type: "string", label: "Full Name"},
  email: { type: "email", label: "Email"},
  password: { type: "password", required: !isEdit, label: "Password" },
  confirmPassword: {
    type: "confirmPassword",
    required: !isEdit,
    label: "Confirm Password",
  },
  phone: { type: "phone", label: "Phone Number" },
  phoneCode: { type: "string", label: "Phone Code"},
  dateOfBirth: { type: "date", label: "Date of Birth" },
  gender: { type: "string", label: "Gender"},
  nationality: { type: "string", label: "Nationality" },
  bloodGroup: { type: "string", label: "Blood Group"},
  course: { type: "string", label: "Course" },
  department: { type: "string", label: "Department"},
  batch: { type: "string", label: "Batch"},
  semester: { type: "number", label: "Semester"},
  admissionDate: { type: "date", label: "Admission Date"},
  expectedGraduationDate: {
    type: "date",
    label: "Expected Graduation Date",
    required: false,
  },
  guardianName: { type: "string", label: "Guardian Name", required: false },
  guardianRelation: {
    type: "string",
    label: "Guardian Relation",
    required: false,
  },
  guardianPhone: { type: "phone", label: "Guardian Phone", required: false },
  guardianEmail: { type: "email", label: "Guardian Email", required: false },
  addressLine1: { type: "string", label: "Address Line 1", required: false },
  addressLine2: { type: "string", label: "Address Line 2", required: false },
  city: { type: "string", label: "City", required: false },
  state: { type: "string", label: "State", required: false },
  postalCode: { type: "string", label: "Postal Code", required: false },
  country: { type: "string", label: "Country", required: false },
  isActive: { type: "boolean", label: "Active" },
  admissionStatus: {
    type: "string",
    label: "Admission Status",
  },
});

export const getStudentSchema = (isEdit: boolean) =>
  buildSchema(studentFields(isEdit));

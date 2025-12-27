import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import ComponentCard from "../../components/common/ComponentCard";
import { decryptParam } from "../../utils/crypto";
import z from "zod";
import { getBankAccountSchema } from "./bankAccount.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInputField from "../../components/form/TextInputField";
import Dropdown from "../../components/form/Dropdown";
import SwitchField from "../../components/ui/switch/SwitchField";
import FormActions from "../../components/form/FormActions";
import ConfirmModal from "../../components/ui/modal/ConfirmModal";
import AppToast from "../../components/ui/toast/Toast";
import Spinner from "../../components/ui/spinner/Spinner";
import httpService from "../../services/httpService";
import { DropdownOption } from "../../types/countries";
export interface StudentOption {
  studentId: string;
  fullName: string;
}

export const accountTypeOptions = [
  { label: "Savings", value: "Savings" },
  { label: "Current", value: "Current" },
];

const BankAccountForm = () => {
  const { id: encodedId } = useParams<{ id: string }>();
  const decryptedId = encodedId ? decryptParam(encodedId) : null;
  const isEdit = Boolean(decryptedId);
  const navigate = useNavigate();
  const bankSchema = getBankAccountSchema();
  type BankFormData = z.infer<typeof bankSchema>;

  const [studentsOptions, setStudentsOptions] = useState<DropdownOption[]>([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({ show: false, message: "", type: "success" });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
    getValues,
  } = useForm<BankFormData>({
    resolver: zodResolver(bankSchema),
    mode: "onChange",
    defaultValues: {
      studentId: "",
      bankName: "",
      accountHolderName: "",
      accountNumber: "",
      ifscCode: "",
      branchName: "",
      accountType: "",
      isPrimary: false,
      isActive: true,
    },
  });

  // Fetch students for dropdown
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await httpService.get<StudentOption[]>("students");
        const students = res.data || [];
        setStudentsOptions(
          students.map((s) => ({ label: s.fullName, value: s.studentId }))
        );
      } catch (err) {
        console.error("Failed to fetch students", err);
      }
    };
    fetchStudents();
  }, []);

  // Fetch existing bank account data if editing
  useEffect(() => {
    if (isEdit && decryptedId) {
      setLoading(true);
      const fetchData = async () => {
        try {
          const res = await httpService.get(`bank-accounts/${decryptedId}`);
          const data = res.data;
          if (data) {
            const cleanData = { ...data } as Record<string, any>;
            delete cleanData.bankAccountId;
            delete cleanData.createdAt;
            delete cleanData.updatedAt;

            reset({ ...cleanData });
          } else {
            setToast({
              show: true,
              message: "Bank account not found",
              type: "error",
            });
          }
        } catch (err) {
          console.error(err);
          setToast({
            show: true,
            message: "Error fetching data",
            type: "error",
          });
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [decryptedId, isEdit, reset]);

  const onSubmit = () => setShowConfirmModal(true);

  const processSubmission = async () => {
    const data = getValues();
    setLoading(true);

    const payload = { ...data };

    try {
      if (isEdit && decryptedId) {
        const response = await httpService.patch<{
          status: string;
          message: string;
        }>(`bank-accounts/${decryptedId}`, payload);

        const result = response.data;
        if (result.status.toLowerCase() === "success") {
          setToast({
            show: true,
            message: "Bank account updated successfully.",
            type: "success",
          });
          setTimeout(() => void navigate("/bank-accounts"), 1500);
        } else {
          setToast({
            show: true,
            message: result.message || "Failed to update bank account.",
            type: "error",
          });
        }
      } else {
        const response = await httpService.post<{
          status: string;
          message: string;
        }>("bank-accounts", payload);

        const result = response.data;
        if (result.status.toLowerCase() === "success") {
          setToast({
            show: true,
            message: "Bank account created successfully.",
            type: "success",
          });
          setTimeout(() => void navigate("/bank-accounts"), 1500);
        } else {
          setToast({
            show: true,
            message: result.message || "Failed to create bank account.",
            type: "error",
          });
        }
      }
    } catch (error) {
      console.error(error);
      setToast({
        show: true,
        message: "An error occurred. Please try again.",
        type: "error",
      });
    } finally {
      setShowConfirmModal(false);
      setLoading(false);
    }
  };

  return (
    <>
      <ComponentCard
        title={isEdit ? "Edit Bank Account" : "Create Bank Account"}
      >
        <form
          onSubmit={(e) => void handleSubmit(onSubmit)(e)}
          autoComplete="off"
          noValidate
        >
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            {/* Student Dropdown */}
            <Dropdown
              id="studentId"
              label="Student"
              options={studentsOptions}
              value={getValues("studentId") as string}
              onChange={(value) =>
                setValue("studentId", value, { shouldValidate: true })
              }
              placeholder="Select Student"
              searchable
              clearable
              error={errors.studentId?.message}
              disabled={isEdit}
              required
            />

            {/* Bank Name */}
            <TextInputField
              id="bankName"
              label="Bank Name"
              register={register("bankName")}
              error={errors.bankName?.message}
              placeholder="Enter Bank Name"
              required
            />

            {/* Account Holder */}
            <TextInputField
              id="accountHolderName"
              label="Account Holder"
              register={register("accountHolderName")}
              error={errors.accountHolderName?.message}
              placeholder="Enter Account Holder Name"
              required
            />

            {/* Account Number */}
            <TextInputField
              id="accountNumber"
              label="Account Number"
              register={register("accountNumber")}
              error={errors.accountNumber?.message}
              placeholder="Enter Account Number"
              required
            />

            {/* IFSC */}
            <TextInputField
              id="ifscCode"
              label="IFSC"
              register={register("ifscCode")}
              error={errors.ifscCode?.message}
              placeholder="Enter IFSC Code"
              required
            />

            {/* Branch */}
            <TextInputField
              id="branchName"
              label="Branch Name"
              register={register("branchName")}
              error={errors.branchName?.message}
              placeholder="Enter Branch Name"
              required
            />

            {/* Account Type Dropdown */}
            <Dropdown
              id="accountType"
              label="Account Type"
              options={accountTypeOptions}
              value={getValues("accountType") as string}
              onChange={(value) =>
                setValue("accountType", value, { shouldValidate: true })
              }
              placeholder="Select Account Type"
              searchable
              clearable
              error={errors.accountType?.message}
              required
            />

            {/* Primary Account */}
            <SwitchField
              id="isPrimary"
              label="Primary Account"
              checked={getValues("isPrimary") as boolean}
              onChange={(value) =>
                setValue("isPrimary", value, { shouldValidate: true })
              }
            />

            {/* Active Status */}
            <SwitchField
              id="isActive"
              label="Active"
              checked={getValues("isActive") as boolean}
              onChange={(value) =>
                setValue("isActive", value, { shouldValidate: true })
              }
            />
          </div>

          <FormActions
            submitLabel={isEdit ? "Update" : "Submit"}
            cancelPath="/bank-accounts"
            disabled={loading}
          />
        </form>
      </ComponentCard>

      <ConfirmModal
        show={showConfirmModal}
        onConfirm={processSubmission}
        onCancel={() => setShowConfirmModal(false)}
        title={isEdit ? "Confirm Update" : "Confirm Submission"}
        message={
          isEdit
            ? "Are you sure you want to update this account?"
            : "Are you sure you want to create this account?"
        }
      />

      <AppToast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast((prev) => ({ ...prev, show: false }))}
      />

      {loading && <Spinner />}
    </>
  );
};

export default BankAccountForm;

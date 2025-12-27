import { useNavigate, useParams } from "react-router";
import ComponentCard from "../../components/common/ComponentCard";
import { decryptParam } from "../../utils/crypto";
import z from "zod";
import { getStudentSchema } from "./student.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInputField from "../../components/form/TextInputField";
import InputPhoneField from "../../components/form/InputPhone";
import { useEffect, useState } from "react";
import { DropdownOption } from "../../types/countries";
import { countryData } from "../../constants/countries";
import SwitchField from "../../components/ui/switch/SwitchField";
import FormActions from "../../components/form/FormActions";
import ConfirmModal from "../../components/ui/modal/ConfirmModal";
import AppToast from "../../components/ui/toast/Toast";
import Spinner from "../../components/ui/spinner/Spinner";
import httpService from "../../services/httpService";
import Dropdown from "../../components/form/Dropdown";
import { coursesOptions } from "../../constants/courses";
import { departmentsOptions } from "../../constants/departments";
import { batchesOptions } from "../../constants/batches";
import { bloodGroupsOptions } from "../../constants/bloodGroups";

const StudentForm = () => {
  const { id: encodedId } = useParams<{ id: string }>();
  const decryptedId = encodedId ? decryptParam(encodedId) : null;
  const isEdit = Boolean(decryptedId);
  const navigate = useNavigate();
  const studentSchema = getStudentSchema(isEdit);
  type StudentFormData = z.infer<typeof studentSchema>;
  const [countries] = useState<DropdownOption[]>(countryData);
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
    trigger,
  } = useForm<StudentFormData>({
    resolver: zodResolver(studentSchema),
    mode: "onChange",
    defaultValues: {
      admissionNo: "",
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      phoneCode: isEdit ? "" : "+971",
      dateOfBirth: "",
      gender: "",
      nationality: "",
      bloodGroup: "",
      course: "",
      department: "",
      batch: "",
      semester: 0,
      admissionDate: "",
      expectedGraduationDate: "",
      guardianName: "",
      guardianRelation: "",
      guardianPhone: "",
      guardianEmail: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      isActive: true,
      admissionStatus: "",
    },
  });

  useEffect(() => {
    if (isEdit && decryptedId) {
      setLoading(true);
      const fetchData = async () => {
        try {
          const response = await httpService.getById("students", decryptedId);
          const data = response?.data;
          if (data) {
            const cleanData = { ...data } as Record<string, any>;
            delete cleanData.studentId;
            delete cleanData.createdAt;
            delete cleanData.updatedAt;

            reset({ ...cleanData, password: "" });
          } else {
            setToast({
              show: true,
              message: "Something went wrong. Please try again.",
              type: "error",
            });
            setTimeout(() => void navigate("/students"), 1500);
          }
        } catch (error) {
          console.error(error);
          setToast({
            show: true,
            message: "Something went wrong. Please try again.",
            type: "error",
          });
          setTimeout(() => void navigate("/students"), 1500);
        } finally {
          setLoading(false);
        }
      };
      fetchData().catch(console.error);
    }
  }, [decryptedId, isEdit, navigate, reset]);

  const onSubmit = () => setShowConfirmModal(true);

  const processSubmission = async () => {
    const data = getValues();
    setLoading(true);
    const { confirmPassword, password, ...values } = data;
    const payload = {
      ...values,
      ...(password ? { password: password } : {}),
    };

    try {
      if (isEdit && decryptedId) {
        const response = await httpService.patch<{
          status: string;
          message: string;
        }>(`students/${decryptedId}`, payload);
        const result = response.data;
        if (result.status.toLowerCase() === "success") {
          setToast({
            show: true,
            message: "Student updated successfully.",
            type: "success",
          });
          setTimeout(() => void navigate("/students"), 1500);
        } else {
          setToast({
            show: true,
            message: result.message || "Failed to update student.",
            type: "error",
          });
        }
      } else {
        const response = await httpService.post<{
          status: string;
          message: string;
        }>("students", payload);
        const result = response.data;
        if (result.status.toLowerCase() === "success") {
          setToast({
            show: true,
            message: "Student created successfully.",
            type: "success",
          });
          setTimeout(() => void navigate("/students"), 1500);
        } else {
          setToast({
            show: true,
            message: result.message || "Failed to create student.",
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
      <ComponentCard title={isEdit ? "Edit Student" : "Create Student"}>
        <form
          onSubmit={(e) => void handleSubmit(onSubmit)(e)}
          autoComplete="off"
          noValidate
        >
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            {/* ================= IDENTITY ================= */}
            <h2 className="col-span-2 text-xl font-bold mt-4">Identity</h2>
            <TextInputField
              id="admissionNo"
              label="Admission No"
              register={register("admissionNo")}
              error={errors.admissionNo?.message}
              placeholder="Enter Admission No"
              required
            />
            <TextInputField
              id="fullName"
              label="Full Name"
              register={register("fullName")}
              error={errors.fullName?.message}
              placeholder="Enter Full Name"
              required
            />
            <TextInputField
              id="email"
              label="Email"
              type="email"
              autoComplete="new-password"
              register={register("email")}
              error={errors.email?.message}
              placeholder="Enter Email"
              required
            />
            <InputPhoneField
              id="phone"
              label="Phone Number"
              mode={"phone"}
              register={register("phone")}
              error={errors.phone?.message}
              countries={countries}
              countryError={errors?.phoneCode?.message}
              selectedCountry={getValues("phoneCode") as string}
              handleCountryChange={(option) => {
                setValue("phoneCode", option?.meta?.phoneCode ?? "", {
                  shouldValidate: true,
                });
                trigger("phone");
              }}
              placeholder="Enter Phone Number"
              required
            />
            {/* ================= PERSONAL INFO ================= */}
            <h2 className="col-span-2 text-xl font-bold mt-4">Personal Info</h2>
            <TextInputField
              id="dateOfBirth"
              label="Date of Birth"
              type="date"
              register={register("dateOfBirth")}
              error={errors.dateOfBirth?.message}
              placeholder="Enter Date of Birth"
              required
            />
            <Dropdown
              id="gender"
              label="Gender"
              options={[
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
                { label: "Other", value: "Other" },
              ]}
              value={getValues("gender") as string}
              onChange={(value) =>
                setValue("gender", value, { shouldValidate: true })
              }
              placeholder="Select Gender"
              error={errors.gender?.message}
              required
            />
            <Dropdown
              id="nationality"
              label="Nationality"
              options={countryData.map((item) => ({
                label: item.label,
                value: item.label,
              }))}
              value={getValues("nationality") as string}
              onChange={(value) =>
                setValue("nationality", value, { shouldValidate: true })
              }
              placeholder="Select Nationality"
              searchable
              clearable
              error={errors.nationality?.message}
              required
            />

            <Dropdown
              id="bloodGroup"
              label="Blood Group"
              options={bloodGroupsOptions}
              value={getValues("bloodGroup") as string}
              onChange={(value) =>
                setValue("bloodGroup", value, { shouldValidate: true })
              }
              placeholder="Select Blood Group"
              error={errors.bloodGroup?.message}
              required
            />
            {/* ================= ACADEMIC INFO ================= */}
            <h2 className="col-span-2 text-xl font-bold mt-4">Academic Info</h2>
            <Dropdown
              id="course"
              label="Course"
              options={coursesOptions}
              value={getValues("course") as string}
              onChange={(value) =>
                setValue("course", value, { shouldValidate: true })
              }
              placeholder="Select Course"
              searchable
              clearable
              required
              error={errors.course?.message}
            />
            <Dropdown
              id="department"
              label="Department"
              options={departmentsOptions}
              value={getValues("department") as string}
              onChange={(value) =>
                setValue("department", value, { shouldValidate: true })
              }
              placeholder="Select Department"
              error={errors.department?.message}
              required
            />
            <Dropdown
              id="batch"
              label="Batch"
              options={batchesOptions}
              value={getValues("batch") as string}
              onChange={(value) =>
                setValue("batch", value, { shouldValidate: true })
              }
              placeholder="Select Batch"
              error={errors.batch?.message}
              required
            />
            <Dropdown
              id="semester"
              label="Semester"
              options={Array.from({ length: 12 }, (_, i) => ({
                label: `${i + 1}`,
                value: i + 1,
              }))}
              value={getValues("semester") as number}
              onChange={(value) =>
                setValue("semester", Number(value), { shouldValidate: true })
              }
              placeholder="Select Semester"
              error={errors.semester?.message}
              required
            />
            <TextInputField
              id="admissionDate"
              label="Admission Date"
              type="date"
              register={register("admissionDate")}
              error={errors.admissionDate?.message}
              placeholder="Enter Admission Date"
            />
            <TextInputField
              id="expectedGraduationDate"
              label="Expected Graduation Date"
              type="date"
              register={register("expectedGraduationDate")}
              error={errors.expectedGraduationDate?.message}
              placeholder="Enter Expected Graduation Date"
            />
            {/* ================= GUARDIAN INFO ================= */}
            <h2 className="col-span-2 text-xl font-bold mt-4">Guardian Info</h2>
            <TextInputField
              id="guardianName"
              label="Guardian Name"
              register={register("guardianName")}
              error={errors.guardianName?.message}
              placeholder="Enter Guardian Name"
            />
            <TextInputField
              id="guardianRelation"
              label="Guardian Relation"
              register={register("guardianRelation")}
              error={errors.guardianRelation?.message}
              placeholder="Enter Guardian Relation"
            />
            <TextInputField
              id="guardianPhone"
              label="Guardian Phone"
              type="number"
              register={register("guardianPhone")}
              error={errors.guardianPhone?.message}
              placeholder="Enter Guardian Phone"
            />
            <TextInputField
              id="guardianEmail"
              label="Guardian Email"
              type="email"
              register={register("guardianEmail")}
              error={errors.guardianEmail?.message}
              placeholder="Enter Guardian Email"
            />
            {/* ================= ADDRESS ================= */}
            <h2 className="col-span-2 text-xl font-bold mt-4">Address</h2>
            <TextInputField
              id="addressLine1"
              label="Address Line 1"
              register={register("addressLine1")}
              error={errors.addressLine1?.message}
              placeholder="Enter Address Line 1"
            />
            <TextInputField
              id="addressLine2"
              label="Address Line 2"
              register={register("addressLine2")}
              error={errors.addressLine2?.message}
              placeholder="Enter Address Line 2"
            />
            <TextInputField
              id="city"
              label="City"
              register={register("city")}
              error={errors.city?.message}
              placeholder="Enter City"
            />
            <TextInputField
              id="state"
              label="State"
              register={register("state")}
              error={errors.state?.message}
              placeholder="Enter State"
            />
            <TextInputField
              id="postalCode"
              label="Postal Code"
              register={register("postalCode")}
              error={errors.postalCode?.message}
              placeholder="Enter Postal Code"
            />
            <Dropdown
              id="country"
              label="Country"
              options={countryData.map((item) => ({
                label: item.label,
                value: item.value,
              }))}
              value={getValues("country") as string}
              onChange={(value) =>
                setValue("country", value, { shouldValidate: true })
              }
              placeholder="Select a country"
              searchable
              clearable
              error={errors.country?.message}
            />
            {/* ================= STATUS & PASSWORD ================= */}
            <h2 className="col-span-2 text-xl font-bold mt-4">
              Status & Password
            </h2>
            <Dropdown
              id="admissionStatus"
              label="Admission Status"
              options={[
                { label: "Applied", value: "Applied" },
                { label: "Enrolled", value: "Enrolled" },
                { label: "Suspended", value: "Suspended" },
                { label: "Graduated", value: "Graduated" },
              ]}
              value={getValues("admissionStatus") as string}
              onChange={(value) =>
                setValue("admissionStatus", value, { shouldValidate: true })
              }
              placeholder="Select Admission Status"
              error={errors.admissionStatus?.message}
              required
            />
            <TextInputField
              id="password"
              label="Password"
              type="password"
              required={!isEdit}
              autoComplete="new-password"
              register={register("password")}
              error={errors.password?.message}
              placeholder="Enter Password"
            />
            <TextInputField
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              required={!isEdit}
              register={register("confirmPassword")}
              error={errors.confirmPassword?.message}
              placeholder="Enter Confirm Password"
              autoComplete="new-password"
            />
            {isEdit && (
              <SwitchField
                id="isActive"
                label="Active"
                checked={getValues("isActive") as boolean}
                onChange={(value) =>
                  setValue("isActive", value, { shouldValidate: true })
                }
              />
            )}
          </div>

          <FormActions
            submitLabel={isEdit ? "Update" : "Submit"}
            cancelPath="/students"
            disabled={loading}
          />
        </form>
      </ComponentCard>
      <ConfirmModal
        show={showConfirmModal}
        onConfirm={() => void processSubmission()}
        onCancel={() => setShowConfirmModal(false)}
        title={isEdit ? "Confirm Update" : "Confirm Submission"}
        message={
          isEdit
            ? "Are you sure you want to update this student?"
            : "Are you sure you want to create this student?"
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

export default StudentForm;

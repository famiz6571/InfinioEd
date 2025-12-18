import { useNavigate, useParams } from "react-router";
import ComponentCard from "../../components/common/ComponentCard";
import { decryptParam } from "../../utils/crypto";
import z from "zod";
import { getUserSchema } from "./user.schema";
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
import { languagesOptions } from "../../constants/languagesOptions";

const UserForm = () => {
  const { id: encodedId } = useParams<{ id: string }>();
  const decryptedId = encodedId ? decryptParam(encodedId) : null;
  const isEdit = Boolean(decryptedId);
  const navigate = useNavigate();
  const userSchema = getUserSchema(isEdit);
  type UserFormData = z.infer<typeof userSchema>;
  const [countries] = useState<DropdownOption[]>(countryData);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [rolesOptions, setRolesOptions] = useState<DropdownOption[]>([]);

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({
    show: false,
    message: "",
    type: "success",
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
    getValues,
    trigger,
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    mode: "onChange",
    defaultValues: {
      userName: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      isActive: true,
      abbreviation: "AE",
      phoneCode: isEdit ? "" : "+971",
      language: "",
      country: "",
      dateOfBirth: "",
      roleId: "",
    },
  });

  useEffect(() => {
    if (isEdit && decryptedId) {
      setLoading(true);
      const fetchData = async () => {
        try {
          const response = await httpService.getById("users", decryptedId);
          const data = response;
          const userValues = data?.data || [];
          if (userValues) {
            reset({ ...userValues, password: "" });
            setLoading(false);
          } else {
            setToast({
              show: true,
              message: "Something went wrong. Please try again.",
              type: "error",
            });
            setTimeout(() => {
              void navigate("/users");
              setLoading(false);
            }, 1500);
          }
        } catch (error) {
          setToast({
            show: true,
            message: "Something went wrong. Please try again.",
            type: "error",
          });
          console.error(error);
          setTimeout(() => {
            void navigate("/users");
            setLoading(false);
          }, 1500);
        }
      };

      fetchData().catch(console.error);
    }
  }, [decryptedId, isEdit, navigate, reset]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await httpService.get<
          { roleId: string; roleName: string }[]
        >("roles");
        const roles = response.data || [];
        setRolesOptions(
          roles.map((role: { roleId: string; roleName: string }) => ({
            label: role.roleName,
            value: role.roleId,
          }))
        );
      } catch (err) {
        console.error("Failed to fetch roles", err);
      }
    };

    fetchRoles();
  }, []);

  const onSubmit = () => {
    console.log("Form submitted");
    setShowConfirmModal(true);
  };
  useEffect(() => {
    console.log("Errors:", errors);
  }, [errors]);

  const processSubmission = async () => {
    const data = getValues();
    setLoading(true);

    const payload = {
      name: data.name,
      userName: data.userName,
      email: data.email,
      ...(data?.password ? { password: data.confirmPassword } : {}),
      phone: data.phone,
      ...(isEdit ? { isActive: data.isActive } : {}),
      phoneCode: data?.phoneCode,
      language: data.language,
      country: data.country,
      ...(data.dateOfBirth ? { dateOfBirth: data.dateOfBirth } : {}),
      roleId: data.roleId,
    };

    try {
      if (isEdit && decryptedId) {
        const response = await httpService.patch<{
          status: string;
          message: string;
        }>(`users/${decryptedId}`, payload);
        const result = response.data;

        if (result.status.toLowerCase() === "success") {
          setToast({
            show: true,
            message: "User updated successfully.",
            type: "success",
          });
          setTimeout(() => {
            void navigate("/users");
            setLoading(false);
          }, 1500);
        } else {
          setToast({
            show: true,
            message: result.message || "Failed to update user.",
            type: "error",
          });
          setLoading(false);
        }
      } else {
        const response = await httpService.post<{
          status: string;
          message: string;
        }>("users", payload);
        const result = response.data;

        if (result.status.toLowerCase() === "success") {
          setToast({
            show: true,
            message: "User created successfully.",
            type: "success",
          });
          setTimeout(() => {
            void navigate("/users");
            setLoading(false);
          }, 1500);
        } else if (
          result.status.toLowerCase() === "error" &&
          result.message.toLowerCase() === "record already exists"
        ) {
          setToast({
            show: true,
            message: "User with this phone number already exists.",
            type: "error",
          });
          setLoading(false);
        } else {
          setToast({
            show: true,
            message: "Failed to create user.",
            type: "error",
          });
          setLoading(false);
        }
      }
    } catch (error) {
      setToast({
        show: true,
        message: "An error occurred. Please try again.",
        type: "error",
      });
      console.error(error);
      setShowConfirmModal(false);
      setLoading(false);
    } finally {
      setShowConfirmModal(false);
    }
  };

  return (
    <>
      <ComponentCard title={isEdit ? "Edit User" : "Create User"}>
        <form
          onSubmit={(e) => void handleSubmit(onSubmit)(e)}
          autoComplete="off"
          noValidate
        >
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <TextInputField
              id="name"
              label="Full Name"
              required
              register={register("name")}
              error={errors.name?.message}
              placeholder="Enter Full Name"
            />
            <TextInputField
              id="userName"
              label="User Name"
              required
              register={register("userName")}
              error={errors.userName?.message}
              placeholder="Enter User Name"
            />
            <TextInputField
              id="email"
              label="Email"
              type="email"
              autoComplete="new-password"
              required
              register={register("email")}
              error={errors.email?.message}
              placeholder="Enter Email"
            />
            <InputPhoneField
              id="phone"
              label="Phone Number"
              required
              register={register("phone")}
              error={errors.phone?.message}
              placeholder="Enter Phone Number"
              mode={"phone"}
              countries={countries}
              countryError={errors?.phoneCode?.message}
              selectedCountry={getValues("phoneCode") as string}
              handleCountryChange={(option) => {
                setValue("abbreviation", option?.meta?.abbreviation ?? "", {
                  shouldValidate: true,
                });
                setValue("phoneCode", option?.meta?.phoneCode ?? "", {
                  shouldValidate: true,
                });
                trigger("phone");
              }}
              emitOnValue={isEdit}
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
              required
              error={errors.country?.message}
            />
            <Dropdown
              id="language"
              label="Language"
              options={languagesOptions.map((item) => ({
                label: item.label,
                value: item.value,
              }))}
              value={getValues("language") as string}
              onChange={(value) =>
                setValue("language", value, { shouldValidate: true })
              }
              placeholder="Select a language"
              searchable
              clearable
              required
              error={errors.language?.message}
            />
            <Dropdown
              id="roleId"
              label="Role"
              options={rolesOptions}
              value={getValues("roleId") as string}
              onChange={(value) =>
                setValue("roleId", value, { shouldValidate: true })
              }
              placeholder="Select Role"
              searchable
              clearable
              required
              error={errors.roleId?.message}
            />

            <TextInputField
              id="dateOfBirth"
              label="Date of Birth"
              type="date"
              register={register("dateOfBirth")}
              error={errors.dateOfBirth?.message}
            />

            <TextInputField
              id="password"
              label="Password"
              type="password"
              required={!isEdit}
              register={register("password")}
              error={errors.password?.message}
              placeholder="Enter Password"
            />
            <TextInputField
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              autoComplete="new-password"
              required={!isEdit}
              register={register("confirmPassword")}
              error={errors.confirmPassword?.message}
              placeholder="Enter Confirm Password"
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
            cancelPath="/users"
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
            ? "Are you sure you want to update this user?"
            : "Are you sure you want to create this user?"
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
export default UserForm;

// src/modules/roles/RoleForm.tsx
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import ComponentCard from "../../components/common/ComponentCard";
import TextInputField from "../../components/form/TextInputField";
import SwitchField from "../../components/ui/switch/SwitchField";
import FormActions from "../../components/form/FormActions";
import ConfirmModal from "../../components/ui/modal/ConfirmModal";
import AppToast from "../../components/ui/toast/Toast";
import Spinner from "../../components/ui/spinner/Spinner";

import httpService from "../../services/httpService";
import { getRoleSchema } from "./role.schema";
import { decryptParam } from "../../utils/crypto";
import MultiSelectDropdown from "../../components/form/MultiSelectDropdown";

export interface RoleFormData {
  roleName: string;
  description?: string;
  isActive: boolean;
  menuIds?: string[];
}

const RoleForm = () => {
  const { id: encodedId } = useParams<{ id: string }>();
  const decryptedId = encodedId ? decryptParam(encodedId) : null;
  const isEdit = Boolean(decryptedId);
  const navigate = useNavigate();

  const [menus, setMenus] = useState<{ menuId: string; name: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({ show: false, message: "", type: "success" });

  const roleSchema = getRoleSchema();
  type RoleFormDataType = z.infer<typeof roleSchema>;

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    reset,
  } = useForm<RoleFormDataType>({
    resolver: zodResolver(roleSchema),
    defaultValues: {
      roleName: "",
      description: "",
      isActive: true,
      menuIds: [],
    },
  });

  // Fetch all menus for dropdown options
  const fetchMenus = async () => {
    try {
      const res = await httpService.get<{ menuId: string; name: string }[]>(
        "menus"
      );
      setMenus(res.data);
    } catch {
      setToast({ show: true, message: "Failed to fetch menus", type: "error" });
    }
  };

  // Fetch role for edit and map menus to menuIds
  const fetchRole = async (id: string) => {
    setLoading(true);
    try {
      const res = await httpService.get<RoleFormDataType & { menus: any[] }>(
        `roles/${id}`
      );

      const selectedMenuIds = res.data.menus?.map((m) => m.menuId) || [];

      reset({
        roleName: res.data.roleName,
        description: res.data.description,
        isActive: res.data.isActive,
        menuIds: selectedMenuIds,
      });
    } catch {
      setToast({ show: true, message: "Failed to fetch role", type: "error" });
      setTimeout(() => navigate("/roles"), 1500);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenus();
    if (isEdit && decryptedId) fetchRole(decryptedId);
  }, [decryptedId]);

  const onSubmit = () => setShowConfirmModal(true);

  const processSubmission = async () => {
    const data = getValues();
    setLoading(true);

    try {
      if (isEdit && decryptedId) {
        const res = await httpService.patch<{
          status: string;
          message: string;
        }>(`roles/${decryptedId}`, data);
        if (res.data.status.toLowerCase() === "success") {
          setToast({
            show: true,
            message: "Role updated successfully",
            type: "success",
          });
          setTimeout(() => navigate("/roles"), 1500);
        } else {
          setToast({
            show: true,
            message: res.data.message || "Failed to update role",
            type: "error",
          });
        }
      } else {
        const res = await httpService.post<{ status: string; message: string }>(
          "roles",
          data
        );
        if (res.data.status.toLowerCase() === "success") {
          setToast({
            show: true,
            message: "Role created successfully",
            type: "success",
          });
          setTimeout(() => navigate("/roles"), 1500);
        } else {
          setToast({
            show: true,
            message: res.data.message || "Failed to create role",
            type: "error",
          });
        }
      }
    } catch {
      setToast({ show: true, message: "An error occurred", type: "error" });
    } finally {
      setLoading(false);
      setShowConfirmModal(false);
    }
  };

  useEffect(() => {
    console.log("Form errors:", errors);
  }, [errors]);

  return (
    <>
      <ComponentCard title={isEdit ? "Edit Role" : "Create Role"}>
        <form
          onSubmit={(e) => void handleSubmit(onSubmit)(e)}
          autoComplete="off"
          noValidate
        >
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <TextInputField
              id="roleName"
              label="Role Name"
              required
              register={register("roleName")}
              error={errors.roleName?.message}
              placeholder="Enter Role Name"
            />
            <TextInputField
              id="description"
              label="Description"
              register={register("description")}
              error={errors.description?.message}
              placeholder="Enter description"
            />
            <MultiSelectDropdown
              id="menuIds"
              label="Menus"
              options={menus.map((m) => ({ value: m.menuId, label: m.name }))}
              value={getValues("menuIds") as string[]}
              onChange={(val) => setValue("menuIds", val as string[])}
              placeholder="Select menus"
              searchable
              clearable
            />
            <SwitchField
              id="isActive"
              label="Active"
              checked={getValues("isActive") as boolean}
              onChange={(val) => setValue("isActive", val)}
            />
          </div>

          <FormActions
            submitLabel={isEdit ? "Update" : "Submit"}
            cancelPath="/roles"
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
            ? "Are you sure you want to update this role?"
            : "Are you sure you want to create this role?"
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

export default RoleForm;

import { useNavigate, useParams } from "react-router";
import ComponentCard from "../../components/common/ComponentCard";
import { decryptParam } from "../../utils/crypto";
import { useForm } from "react-hook-form";
import TextInputField from "../../components/form/TextInputField";
import Dropdown, { Option } from "../../components/form/Dropdown";
import SwitchField from "../../components/ui/switch/SwitchField";
import FormActions from "../../components/form/FormActions";
import ConfirmModal from "../../components/ui/modal/ConfirmModal";
import AppToast from "../../components/ui/toast/Toast";
import Spinner from "../../components/ui/spinner/Spinner";
import httpService from "../../services/httpService";
import { useEffect, useState } from "react";
import { getMenuSchema } from "./menu.schema";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import UnifiedIconPicker from "../../components/form/UnifiedIconPicker";

export interface MenuFormData {
  name: string;
  path?: string;
  icon: string;
  order?: number;
  parentId?: string;
  isActive: boolean;
}

const MenuForm = () => {
  const { id: encodedId } = useParams<{ id: string }>();
  const decryptedId = encodedId ? decryptParam(encodedId) : null;
  const isEdit = Boolean(decryptedId);
  const navigate = useNavigate();

  const [showConfirmModal, setShowConfirmModal] = useState(false);
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
  const [parentMenuOptions, setParentMenuOptions] = useState<Option[]>([]);
  const menuSchema = getMenuSchema();
  type MenuFormData = z.infer<typeof menuSchema>;

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    reset,
  } = useForm<MenuFormData>({
    resolver: zodResolver(menuSchema),
    defaultValues: {
      name: "",
      path: "",
      icon: "",
      order: 0,
      parentId: "",
      isActive: true,
    },
  });

  useEffect(() => {
    const fetchParentMenus = async () => {
      try {
        const res = await httpService.get<MenuFormData[]>("menus");
        const options = res.data
          .filter((menu) => !decryptedId || menu.menuId !== decryptedId)
          .map((menu) => ({
            label: menu.name,
            value: menu.menuId,
          }));
        setParentMenuOptions(options as Option[]);
      } catch (err) {
        console.error("Failed to fetch parent menus", err);
      }
    };

    fetchParentMenus();
  }, [decryptedId]);

  useEffect(() => {
    if (isEdit && decryptedId) {
      setLoading(true);
      httpService
        .get<MenuFormData>(`menus/${decryptedId}`)
        .then((res) => {
          const data = res.data;
          reset({
            ...data,
            parentId: data.parentId || "",
          });
        })
        .catch(() => {
          setToast({
            show: true,
            message: "Failed to fetch menu",
            type: "error",
          });
          setTimeout(() => navigate("/menus"), 1500);
        })
        .finally(() => setLoading(false));
    }
  }, [decryptedId, isEdit, navigate, reset]);

  const onSubmit = () => setShowConfirmModal(true);

  const processSubmission = async () => {
    const data = getValues();
    setLoading(true);

    const payload = {
      name: data.name,
      path: data.path,
      icon: data.icon,
      order: data.order,
      parentId: data.parentId || null,
      isActive: data.isActive,
    };

    try {
      if (isEdit && decryptedId) {
        const res = await httpService.patch<{
          status: string;
          message: string;
        }>(`menus/${decryptedId}`, payload);
        if (res.data.status.toLowerCase() === "success") {
          setToast({
            show: true,
            message: "Menu updated successfully",
            type: "success",
          });
          setTimeout(() => navigate("/menus"), 1500);
        } else {
          setToast({
            show: true,
            message: res.data.message || "Failed to update menu",
            type: "error",
          });
        }
      } else {
        const res = await httpService.post<{ status: string; message: string }>(
          "menus",
          payload
        );
        if (res.data.status.toLowerCase() === "success") {
          setToast({
            show: true,
            message: "Menu created successfully",
            type: "success",
          });
          setTimeout(() => navigate("/menus"), 1500);
        } else {
          setToast({
            show: true,
            message: res.data.message || "Failed to create menu",
            type: "error",
          });
        }
      }
    } catch {
      setToast({ show: true, message: "An error occurred", type: "error" });
    } finally {
      setShowConfirmModal(false);
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log("Form errors:", errors);
  }, [errors]);

  return (
    <>
      <ComponentCard title={isEdit ? "Edit Menu" : "Create Menu"}>
        <form
          onSubmit={(e) => void handleSubmit(onSubmit)(e)}
          autoComplete="off"
          noValidate
        >
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <TextInputField
              id="name"
              label="Menu Name"
              required
              register={register("name")}
              error={errors.name?.message}
              placeholder="Enter Menu Name"
            />
            <TextInputField
              id="path"
              label="Path"
              register={register("path")}
              error={errors.path?.message}
              placeholder="Enter Path"
            />
            <UnifiedIconPicker
              label="Icon (Iconify)"
              value={getValues("icon") as string}
              onChange={(val) =>
                setValue("icon", val ?? "", {
                  shouldValidate: true,
                })
              }
              error={errors.icon?.message}
              placeholder="Select Icon"
              required
            />
            <TextInputField
              id="order"
              label="Order"
              type="number"
              register={register("order", {
                valueAsNumber: true,
              })}
              error={errors.order?.message}
              placeholder="0"
            />
            <Dropdown
              id="parentId"
              label="Parent Menu"
              options={parentMenuOptions}
              value={getValues("parentId") as string}
              onChange={(val) => setValue("parentId", val as string)}
              placeholder="Select Parent Menu"
            />
            <SwitchField
              id="isActive"
              label="Active"
              checked={getValues("isActive") as boolean}
              onChange={(val) => setValue("isActive", val as boolean)}
            />
          </div>
          <FormActions
            submitLabel={isEdit ? "Update" : "Submit"}
            cancelPath="/menus"
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
            ? "Are you sure you want to update this menu?"
            : "Are you sure you want to create this menu?"
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

export default MenuForm;

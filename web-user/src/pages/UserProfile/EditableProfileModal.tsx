import { type FC, type ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { buildSchema, type FieldDefinition } from "@/utils/schemaBuilder";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EditableProfileModalProps {
  open: boolean;
  fields: Record<string, FieldDefinition>;
  initialValues: Record<string, any>;
  onSave: (data: Record<string, any>) => void;
  onClose: () => void;
}

const EditableProfileModal: FC<EditableProfileModalProps> = ({
  open,
  fields,
  initialValues,
  onSave,
  onClose,
}) => {
  const schema = buildSchema(fields);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: initialValues,
  });

  const submitHandler = (data: Record<string, any>) => {
    onSave(data);
    onClose();
  };

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setValue("avatar", url);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="
          w-full
          max-w-sm sm:max-w-2xl lg:max-w-xl 
          max-h-[90vh] sm:max-h-[80vh] lg:max-h-[70vh]
          overflow-y-auto
          p-6
           custom-scrollbar
        "
      >
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(fields).map(([key, def]) => {
              // Avatar upload
              if (key === "avatar") {
                return (
                  <div
                    key={key}
                    className="md:col-span-2 flex flex-col items-start"
                  >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {def.label || key}
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarChange}
                    />
                    {initialValues.avatar && (
                      <img
                        src={initialValues.avatar}
                        alt="avatar"
                        className="w-32 h-32 mt-2 rounded-full object-cover"
                      />
                    )}
                    {errors[key] && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors[key]?.message?.toString()}
                      </p>
                    )}
                  </div>
                );
              }

              // Boolean field
              if (def.type === "boolean") {
                return (
                  <div key={key} className="flex items-center gap-2">
                    <input type="checkbox" {...register(key)} />
                    <label className="text-gray-700 dark:text-gray-300">
                      {def.label || key}
                    </label>
                  </div>
                );
              }

              // Country select
              if (def.type === "country") {
                return (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {def.label || key}
                    </label>
                    <Select
                      onValueChange={(val) => setValue(key, val)}
                      defaultValue={initialValues[key]}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AE">United Arab Emirates</SelectItem>
                        <SelectItem value="US">United States</SelectItem>
                        <SelectItem value="IN">India</SelectItem>
                        <SelectItem value="GB">United Kingdom</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors[key] && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors[key]?.message?.toString()}
                      </p>
                    )}
                  </div>
                );
              }

              // Multi-line text (bio)
              if (
                def.type === "string" &&
                def.label?.toLowerCase().includes("bio")
              ) {
                return (
                  <div key={key} className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {def.label || key}
                    </label>
                    <Textarea {...register(key)} className="w-full" />
                    {errors[key] && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors[key]?.message?.toString()}
                      </p>
                    )}
                  </div>
                );
              }

              // Default input
              return (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {def.label || key}
                  </label>
                  <Input
                    type={
                      def.type === "password" || def.type === "confirmPassword"
                        ? "password"
                        : "text"
                    }
                    {...register(key)}
                    className="w-full"
                  />
                  {errors[key] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[key]?.message?.toString()}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <DialogFooter className="mt-6 flex flex-col sm:flex-row sm:justify-end gap-2">
            <Button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white w-full sm:w-auto"
            >
              Save
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditableProfileModal;

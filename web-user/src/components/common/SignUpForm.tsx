import type { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { buildSchema, type FieldDefinition } from "@/utils/schemaBuilder";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const signUpFields: Record<string, FieldDefinition> = {
  name: { type: "string", required: true, label: "Name" },
  email: { type: "email", required: true, label: "Email" },
  password: { type: "password", required: true, label: "Password" },
  confirmPassword: {
    type: "confirmPassword",
    required: true,
    label: "Confirm Password",
  },
};

const signUpSchema = buildSchema(signUpFields);
export type SignUpFormData = ReturnType<
  (typeof signUpSchema)["parse"]
> extends infer U
  ? U
  : unknown;

interface SignUpFormProps {
  onSubmit: (data: SignUpFormData) => void;
}

export const SignUpForm: FC<SignUpFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const submitHandler = (data: SignUpFormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(submitHandler)}
    >
      {Object.keys(signUpFields).map((key) => (
        <div className="flex flex-col gap-1" key={key}>
          <Label htmlFor={key}>{signUpFields[key].label}</Label>
          <Input
            id={key}
            type={
              signUpFields[key].type === "password" ||
              signUpFields[key].type === "confirmPassword"
                ? "password"
                : "text"
            }
            {...register(key as keyof SignUpFormData)}
          />
          {errors[key as keyof SignUpFormData] && (
            <p className="text-red-500 text-sm">
              {errors[key as keyof SignUpFormData]?.message as string}
            </p>
          )}
        </div>
      ))}
      <Button type="submit" className="mt-2 w-full">
        Sign Up
      </Button>
    </form>
  );
};

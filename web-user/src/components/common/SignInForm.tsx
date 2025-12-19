import type { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { buildSchema, type FieldDefinition } from "@/utils/schemaBuilder";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const signInFields: Record<string, FieldDefinition> = {
  email: { type: "email", required: true, label: "Email" },
  password: { type: "password", required: true, label: "Password" },
};

const signInSchema = buildSchema(signInFields);
export type SignInFormData = ReturnType<
  (typeof signInSchema)["parse"]
> extends infer U
  ? U
  : unknown;

interface SignInFormProps {
  onSubmit: (data: SignInFormData) => void;
}

export const SignInForm: FC<SignInFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const submitHandler = (data: SignInFormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(submitHandler)}
    >
      {Object.keys(signInFields).map((key) => (
        <div className="flex flex-col gap-1" key={key}>
          <Label htmlFor={key}>{signInFields[key].label}</Label>
          <Input
            id={key}
            type={signInFields[key].type === "password" ? "password" : "text"}
            {...register(key as keyof SignInFormData)}
          />
          {errors[key as keyof SignInFormData] && (
            <p className="text-red-500 text-sm">
              {errors[key as keyof SignInFormData]?.message as string}
            </p>
          )}
        </div>
      ))}
      <Button type="submit" className="mt-2 w-full">
        Sign In
      </Button>
    </form>
  );
};

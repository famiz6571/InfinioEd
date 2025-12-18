import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeCloseIcon } from "../../icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Button from "../ui/button/Button";
import { z, ZodError } from "zod";
import httpService from "../../services/httpService";
import { useAuth } from "../../context/AuthProvider";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

// Type for API response
interface LoginResponse {
  user: {
    userId: string;
    name: string;
    email: string;
  };
}

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form with Zod
    try {
      loginSchema.parse(formData);
      setErrors({});
    } catch (err) {
      if (err instanceof ZodError) {
        const fieldErrors: { email?: string; password?: string } = {};
        err.issues.forEach((issue) => {
          const key = issue.path[0];
          if (key === "email" || key === "password") {
            fieldErrors[key] = issue.message;
          }
        });
        setErrors(fieldErrors);
        return;
      }
    }

    setLoading(true);
    setApiError(null);

    try {
      const response = await httpService.post<LoginResponse>(
        "/auth/login",
        formData
      );

      // Call login from context
      await login(formData.email, formData.password);

      // Save user to localStorage
      localStorage.setItem("user", JSON.stringify(response.data.user));

      navigate("/"); // Redirect to dashboard
    } catch (err: any) {
      console.error(err);
      setApiError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center px-4">
      <h1 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
        Sign In
      </h1>
      <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 text-center">
        Enter your email and password to sign in
      </p>

      {apiError && <p className="mb-2 text-xs text-red-500">{apiError}</p>}

      <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
        <div>
          <Label>Email</Label>
          <Input
            placeholder="info@gmail.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <Label>Password</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? (
                <EyeIcon className="size-5 text-gray-500" />
              ) : (
                <EyeCloseIcon className="size-5 text-gray-500" />
              )}
            </span>
          </div>
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password}</p>
          )}
        </div>

        {/* <Link
          to="/reset-password"
          className="text-sm text-blue-500 hover:underline"
        >
          Forgot password?
        </Link> */}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </Button>

        {/* <p className="mt-4 text-sm text-center text-gray-700 dark:text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p> */}
      </form>
    </div>
  );
}

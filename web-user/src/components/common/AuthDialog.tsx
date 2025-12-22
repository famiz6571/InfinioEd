import { useState, type FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { SignInForm, type SignInFormData } from "./SignInForm";
import { SignUpForm, type SignUpFormData } from "./SignUpForm";
import { useAuth } from "@/context/AuthContext";

const AuthDialog: FC = () => {
  const [open, setOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const { login } = useAuth();

  const handleSignIn = (data: SignInFormData) => {
    const success = login(String(data.email), String(data.password));
    if (success) {
      setOpen(false);
      setStatusMessage(null);
    } else {
      setStatusMessage("Invalid credentials ❌ Use: john@example.com / 123456");
    }
  };

  const handleSignUp = (data: SignUpFormData) => {
    // Check if required fields exist (frontend-only)
    if (!data.firstName || !data.lastName || !data.email || !data.password) {
      setStatusMessage("All fields are required for signup.");
      return;
    }

    // Success message
    setStatusMessage(
      `Sign Up Successful! Welcome ${data.firstName} ${data.lastName}`
    );
    // Do NOT close popup
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-white/20 text-white hover:bg-white/40">
          Sign In
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[400px] p-6">
        <DialogHeader>
          <DialogTitle>Welcome</DialogTitle>
          <DialogDescription>
            Sign in with demo: john@example.com / 123456 or create a new account
          </DialogDescription>
        </DialogHeader>

        {statusMessage && (
          <p className="text-center text-sm text-red-500 mb-4">
            {statusMessage}
          </p>
        )}

        <Tabs defaultValue="signin" className="mt-2 w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="signin">
            <SignInForm onSubmit={handleSignIn} />
          </TabsContent>

          <TabsContent value="signup">
            <SignUpForm onSubmit={handleSignUp} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;

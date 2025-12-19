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

const AuthDialog: FC = () => {
  const [open, setOpen] = useState(false);

  const handleSignIn = (data: SignInFormData) => {
    console.log("Sign In submitted:", data);
    setOpen(false);
  };

  const handleSignUp = (data: SignUpFormData) => {
    console.log("Sign Up submitted:", data);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="
              bg-white/20 text-white
              dark:bg-white/10 dark:text-white
              border-none
              hover:bg-white/40 dark:hover:bg-white/30
              transition-colors duration-200
            "
        >
          Sign In
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[400px] p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl">Welcome</DialogTitle>
          <DialogDescription className="text-gray-500">
            Sign in to your account or create a new one
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="signin" className="mt-6 w-full">
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

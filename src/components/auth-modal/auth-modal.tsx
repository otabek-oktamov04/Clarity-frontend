import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AlertCircle } from "lucide-react";
import { useLogin } from "@/react-query/hooks/hooks";
import { ILoginFormInputs } from "@/utils/interfaces/auth.interface";

type FormValues = {
  username: string;
  password: string;
};

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: IProps) {
  const [error, setError] = useState("");
  const { mutateAsync, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInputs>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      mutateAsync(data);
    } catch {
      setError("Login or password is incorrect");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Enter your credentials to access your account.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col  gap-4">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                {...register("username", { required: "Username is required" })}
                className="col-span-3"
              />
              {errors.username && (
                <p className="text-red-500 col-span-3">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                {...register("password", { required: "Password is required" })}
                className="col-span-3"
              />
              {errors.password && (
                <p className="text-red-500 col-span-3">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
          {error && (
            <div className="flex items-center gap-2 text-red-500 mb-4">
              <AlertCircle className="h-5 w-5" />
              <span>{error}</span>
            </div>
          )}
          <DialogFooter>
            <Button
              disabled={isPending}
              type="submit"
              className="h-12 w-full bg-blue-500 "
            >
              {isPending ? "Logging..." : "Login"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

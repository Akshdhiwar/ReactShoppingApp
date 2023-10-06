import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { useState } from "react";
import Loader from "../components/ui/loader";
import { Separator } from "../components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const CreateAccountSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()

      .min(8, { message: "Password must be alteast 8 characters" })
      .regex(
        new RegExp(
          "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
        ),
        {
          message:
            "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character:",
        }
      )
      .max(20, { message: "Password must be not more than 20 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be alteast 8 characters" })
      .max(20, { message: "Password must be not more than 20 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const CreateAccount = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const createAccountForm = useForm<z.infer<typeof CreateAccountSchema>>({
    resolver: zodResolver(CreateAccountSchema),
  });

  function createUser() {
    setIsLoading((prevState) => !prevState);
    setTimeout(() => {
      setIsLoading((prevState) => !prevState);
      setOpen((prevState) => !prevState);
    }, 3000);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"outline"}>Signup</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Account</DialogTitle>
          <DialogDescription>Enter your details</DialogDescription>
        </DialogHeader>
        <Form {...createAccountForm}>
          <form onSubmit={createAccountForm.handleSubmit(createUser)}>
            <div>
              <FormField
                control={createAccountForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={createAccountForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={createAccountForm.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
            </div>
            <DialogFooter className="pt-4">
              <Button disabled={isLoading} className="w-full" type="submit">
                {!isLoading ? "Signup" : <Loader></Loader>}
              </Button>
            </DialogFooter>
          </form>
        </Form>
        <div className="w-full flex items-center gap-2">
          <Separator className="flex-1"></Separator>or
          <Separator className="flex-1"></Separator>
        </div>
        <Button variant={"secondary"} className="hover:border border-slate-400">
          <img src="/google.svg" className="h-4 mr-1" /> Signin with Google
        </Button>
        <Button variant={"secondary"} className="hover:border border-slate-400">
          <GitHubLogoIcon className="h-4 mr-1" /> Signin with Github
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default CreateAccount;

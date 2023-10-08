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
import { Separator } from "../components/ui/separator";

const createAccountSchema = z.object({
  name: z.string(),
  number: z
    .string()
    .max(10, {
      message: "Maximum 10 digits are allowed",
    })
    .min(10, {
      message: "Minumum 10 digits are allowed",
    }),
  email: z.string().email(),
  password: z
    .string()
    .max(15, {
      message: "Password should not exceed 15 characters",
    })
    .min(8, {
      message: "Password must be atleast 8 characters",
    })
    .regex(
      new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
      ),
      {
        message:
          "Minimum eight and maximum 15 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
      }
    ),
});

const CreateAccount = (props: any) => {
  const createAccountForm = useForm<z.infer<typeof createAccountSchema>>({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit() {}
  function goToLogin() {
    props.goToLoginFunction();
  }

  return (
    <>
      <div className="flex items-center flex-col my-2">
        <p className="text-2xl font-semibold tracking-tight mb-2">
          Create an Account
        </p>
        <p className=" text-muted-foreground text-sm">
          Enter your details to create account
        </p>
      </div>
      <Form {...createAccountForm}>
        <form onSubmit={createAccountForm.handleSubmit(onSubmit)}>
          <FormField
            control={createAccountForm.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Dave jones" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={createAccountForm.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input placeholder="9876543210" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={createAccountForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="iamrobot@gmail.com"
                    type="email"
                    {...field}
                  />
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
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <Button className="mt-4 w-full"> Create an Account </Button>
        </form>
      </Form>
      {/* <div className="flex w-full items-center gap-1 text-sm my-4">
        <Separator className="flex-1" />
        OR CONTINUE WITH
        <Separator className="flex-1" />
      </div>
      <Button variant={"outline"} className="gap-2 w-full mb-2">
        <InstagramLogoIcon></InstagramLogoIcon> Instagram
      </Button> */}
      <div className="lg:hidden">
        <div className="flex w-full items-center gap-1 text-sm my-2">
          <Separator className="flex-1" />
          Already have Account ?
          <Separator className="flex-1" />
        </div>
        <div>
          <Button
            className="w-full mt-2"
            variant={"outline"}
            onClick={goToLogin}
          >
            Login
          </Button>
        </div>
      </div>

      <div className="mx-10 text-center my-1">
        <p className="text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <a
            className="underline underline-offset-4 hover:text-primary"
            href="#"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            className="underline underline-offset-4 hover:text-primary"
            href="#"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default CreateAccount;

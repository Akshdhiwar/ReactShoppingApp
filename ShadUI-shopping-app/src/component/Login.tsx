import image from "../assets/images/dumbles.jpg";
import { FrameIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useForm } from "react-hook-form";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { useState } from "react";
import CreateAccount from "./CreateAccount";

const loginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
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

const Login = () => {
  const [loginScreen, setLoginScreen] = useState(true);
  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit() {}

  function toggleLoginScreen() {
    setLoginScreen((prev) => (prev = !prev));
  }
  return (
    <div className="h-screen flex ">
      <div className="h-full w-1/2 relative box-border hidden lg:block">
        <img
          src={image}
          alt=""
          className="absolute h-full w-full object-cover bg-center grayscale"
        />
        <div className="absolute p-8 h-2/3 flex flex-col justify-between text-white">
          <p className="flex items-center gap-2 font-bold text-4xl text-orange-500">
            <FrameIcon></FrameIcon>Dumbles.shop
          </p>
          <div>
            <p className="font-extrabold text-5xl">
              Get your Home Gym Setup now
            </p>
            <p className="font-extrabold text-5xl mb-16">
              Be a <span className=" text-orange-500">Ziddi !</span>
            </p>
          </div>
        </div>
      </div>
      <div className="h-full w-full p-8 flex items-center justify-center lg:w-1/2">
        <Button
          className="absolute right-8 top-8 hidden lg:block"
          onClick={toggleLoginScreen}
        >
          {loginScreen ? "Create an Account" : "Login"}
        </Button>
        <div className="w-[350px] py-6 box-border">
          <p className="text-3xl font-bold tracking-tight my-2 text-center lg:hidden text-orange-500">
            Dumbles.shop
          </p>
          {loginScreen ? (
            <div>
              <div className="flex items-center flex-col my-2">
                <p className="text-2xl font-semibold tracking-tight mb-2">
                  Login
                </p>
                <p className=" text-muted-foreground text-sm">
                  Enter your details to login
                </p>
              </div>
              <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(onSubmit)}>
                  <FormField
                    control={loginForm.control}
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
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your password "
                            type="password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>
                  <Button className="w-full mt-4" type="submit">
                    Login
                  </Button>
                </form>
              </Form>
              <div className="flex w-full items-center gap-1 text-sm my-4">
                <Separator className="flex-1" />
                or
                <Separator className="flex-1" />
              </div>
              <Button variant={"outline"} className="gap-2 w-full mb-2">
                <InstagramLogoIcon></InstagramLogoIcon>Login with Instagram
              </Button>
              <div className="lg:hidden">
                <div className="flex w-full items-center gap-1 text-sm my-2">
                  <Separator className="flex-1" />
                  Dont have an account ?
                  <Separator className="flex-1" />
                </div>
                <Button className="w-full mt-2" onClick={toggleLoginScreen}>
                  Create an Account
                </Button>
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
            </div>
          ) : (
            <CreateAccount />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

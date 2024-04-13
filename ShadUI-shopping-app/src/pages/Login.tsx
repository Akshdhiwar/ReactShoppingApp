import { ChevronRightIcon, FrameIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { useState } from "react";

const Login = () => {
  let navigate = useNavigate();
  const [loginState, setLoginState] = useState(true)
  return (
    <div className="h-screen flex ">
      <div className="h-full w-1/2 relative box-border hidden lg:block">
        <img
          src="./dumbles.jpg"
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
          className="absolute right-8 top-8 rounded-full flex items-center justify-center"
          onClick={() => navigate("/")}
          size={"icon"}
          variant={"secondary"}
        >
          <ChevronRightIcon height={30} width={30} />
        </Button>
        <div className="flex items-center justify-center py-12">
          {
            loginState ? <div className="mx-auto grid w-[350px] gap-6">
              <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">Login</h1>
                <p className="text-balance text-muted-foreground">
                  Enter your email below to login to your account
                </p>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="/forgot-password"
                      className="ml-auto inline-block text-sm underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline" onClick={() => setLoginState(false)}>
                  Sign up
                </a>
              </div>
            </div> :
              <div className="mx-auto grid w-[400px] gap-6">
                <div className="grid gap-2 text-center">
                  <h1 className="text-3xl font-bold">Sign Up</h1>
                  <p className="text-balance text-muted-foreground">
                    Enter your information to create an account
                  </p>
                </div>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" placeholder="Max" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="Robinson" required />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" />
                    </div>
                    <Button type="submit" className="w-full">
                      Create an account
                    </Button>
                    <Button variant="outline" className="w-full">
                      Sign up with GitHub
                    </Button>
                  </div>
                  <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <a href="#" className="underline" onClick={() => setLoginState(true)}>
                      Sign in
                    </a>
                  </div>
              </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Login;

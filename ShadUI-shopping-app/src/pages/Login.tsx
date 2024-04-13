import { ChevronRightIcon, FrameIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { useState } from "react";
import axios from "axios";
import { baseURL } from "../Constants/api";

const Login = () => {
  let navigate = useNavigate();
  const [loginState, setLoginState] = useState(true)


  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [firstName , setFirstName] = useState("")
  const [lastName , setLastName] = useState("")

  function login(){
    axios.post(`${baseURL}account/login`,{
      "Email": email,
      "Password" : password
    }).then( response => {
      // Extract access token from the response
      const accessToken = response.data.access_token;

      // Set the access token in a cookie with a specified expiration time
      const expirationTime = 3600 * 1000; // 1 hour in milliseconds
      const expires = new Date(Date.now() + expirationTime).toUTCString();
      document.cookie = `access_token=${accessToken}; expires=${expires}; path=/`;
    }
    )
  }

  function signup(){
    axios.post(`${baseURL}account/signup`,{
      "Email": email,
      "Password" : password,
      "FirstName" : firstName,
      "LastName" : lastName
    })
  }

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
                    onChange={(e)=>setEmail(e.target.value)}
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
                  <Input id="password" type="password" required onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <Button type="submit" className="w-full" onClick={login}>
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
                        <Input id="first-name" placeholder="Max" required onChange={(e)=> setFirstName(e.target.value)}/>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="Robinson" required  onChange={(e)=> setLastName(e.target.value)}/>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        onChange={(e)=> setEmail(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password"  onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                    <Button type="submit" className="w-full" onClick={signup}>
                      Create an account
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

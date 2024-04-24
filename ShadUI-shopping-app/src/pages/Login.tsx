import { ChevronRightIcon, FrameIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
import { useEffect, useState } from "react";
// import axios from "axios";
// import { baseURL } from "../Constants/api";
// import z from "zod"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { supabase } from "../Constants/supabase";
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'


// const loginSchema = z.object({
//   email: z.string().email("Valid email is required"),
//   password: z.string().min(8, "Minimum 8 characters are required")
// })

// const signUpSchema = z.object({
//   email: z.string().email("Valid email is required"),
//   password: z.string().min(8, "Minimum 8 characters are required"),
//   firstName: z.string(),
//   lastName: z.string()
// })

const Login = () => {
  let navigate = useNavigate();
  const [session, setSession] = useState<unknown>(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    if (session) {
      navigate("/dashboard");
    }

    return () => subscription.unsubscribe();
  }, [session]);

  // const [loginState, setLoginState] = useState(true)

  // const loginForm = useForm<z.infer<typeof loginSchema>>({
  //   resolver: zodResolver(loginSchema)
  // })
  // const signUpForm = useForm<z.infer<typeof signUpSchema>>({
  //   resolver: zodResolver(signUpSchema)
  // })
  
  // const onLoginSubmit = async (values: z.infer<typeof loginSchema>) => {
  //   try {
  //     const response = await axios.post(`${baseURL}account/login`, {
  //       "Email": values.email,
  //       "Password": values.password
  //     });
  //     const accessToken = response.data.access_token;
  //     const expirationTime = 3600 * 1000; // 1 hour in milliseconds
  //     const expires = new Date(Date.now() + expirationTime).toUTCString();
  //     document.cookie = `access_token=${accessToken}; expires=${expires}; path=/`;
  //     navigate("/dashboard")
  //   } catch (error) {
  //     console.error('Login API error:', error);
  //   }
  // }

  // const onSignUpSubmit = async (values: z.infer<typeof signUpSchema>) => {
  //   try {
  //     await axios.post(`${baseURL}account/signup`, {
  //       "FirstName": values.firstName,
  //       "LastName": values.lastName,
  //       "Email": values.email,
  //       "Password": values.password,
  //     });
  //   } catch (error) {
  //     console.error('Signup API error:', error);
  //   }
  // };

  return (
    <div className="h-screen flex ">
      <div className="h-full w-1/2 relative box-border hidden lg:block">
        <img
          src="./dumbles.jpg"
          alt=""
          className="absolute h-full w-full object-cover bg-center grayscale"
        />
        <div className="absolute p-8 h-2/3 flex flex-col justify-between text-white">
          <p className="flex items-center gap-2 font-bold text-4xl text-primary">
            <FrameIcon></FrameIcon>Dumbles.shop
          </p>
          <div>
            <p className="font-extrabold text-5xl">
              Get your Home Gym Setup now
            </p>
            <p className="font-extrabold text-5xl mb-16">
              Be a <span className=" text-primary">Ziddi !</span>
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
        {/* <div className="flex items-center justify-center py-12">
          {
            loginState ? <div className="mx-auto grid w-[350px] gap-6">
              <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">Login</h1>
                <p className="text-balance text-muted-foreground">
                  Enter your email below to login to your account
                </p>
              </div>
              <Form {...loginForm}>
                <form className="grid gap-2" onSubmit={loginForm.handleSubmit(onLoginSubmit)}>
                  <FormField
                    control={loginForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="max@example.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                  <Button variant="outline" className="w-full">
                    Login with Google
                  </Button>
                </form>
              </Form>

              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline" onClick={() => setLoginState(false)}>
                  Sign up
                </a>
              </div>
            </div> :
              <div className="mx-auto grid w-[350px] gap-6">
                <div className="grid gap-2 text-center">
                  <h1 className="text-3xl font-bold">Sign Up</h1>
                  <p className="text-balance text-muted-foreground">
                    Enter your information to create an account
                  </p>
                </div>
                <Form {...signUpForm}>
                  <form className="grid gap-2" onSubmit={signUpForm.handleSubmit(onSignUpSubmit)}>
                    <div className="grid grid-cols-2 gap-2">
                      <FormField
                        control={signUpForm.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input type="text" placeholder="Max" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={signUpForm.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input type="text" placeholder="Max" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                        control={signUpForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="max@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                   <FormField
                        control={signUpForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input type="password"{...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    <Button type="submit" className="w-full">
                      Create an account
                    </Button>
                  </form>
                </Form>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <a href="#" className="underline" onClick={() => setLoginState(true)}>
                    Sign in
                  </a>
                </div>
              </div>
          }
        </div> */}
         <div className="w-[350px] py-6 box-border">
          <p className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl lg:leading-[1.1] text-primary">
            Dumbles.shop
          </p>
          <p className=" text-base text-muted-foreground">
            Login to get your home gym setup now.
          </p>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={["google"]}
            socialLayout="horizontal"
            theme="light"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

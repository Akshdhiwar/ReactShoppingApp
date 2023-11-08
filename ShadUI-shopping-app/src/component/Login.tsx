import image from "../assets/images/dumbles.jpg";
import { ChevronRightIcon, FrameIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../Constants/supabase";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";

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
          className="absolute right-8 top-8 rounded-full flex items-center justify-center"
          onClick={() => navigate("/")}
          size={"icon"}
          variant={"secondary"}
        >
          <ChevronRightIcon height={30} width={30} />
        </Button>
        <div className="w-[350px] py-6 box-border">
          <p className="text-3xl font-bold tracking-tight my-2 text-center lg:hidden text-orange-500">
            Dumbles.shop
          </p>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={["google"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

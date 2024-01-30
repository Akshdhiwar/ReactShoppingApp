import { Button } from "./ui/button";
import { supabase } from "../Constants/supabase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Userprofile from "../Interfaces/UserProfile";
import { ArrowRightIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import UserProfile from "./UserProfile";

const Toolbar = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("dashboard");
  const [user, setUser] = useState<Userprofile | null>(null);

  async function getUser() {
    try {
      const userResponse = await supabase.auth.getUser();
      const identityData =
        userResponse?.data?.user?.identities?.[0]?.identity_data;
      return identityData;
    } catch (error) {
      console.error("Failed to Get User Identity Data: ", error);
      return null;
    }
  }

  useEffect(() => {
    getUser().then((res: Userprofile | any) => {
      setUser(res);
    });
  }, []);

  const onTabChange = (value: string) => {
    setSelected(value);
  };
  return (
    <div className=" content-grid">
      <div className="bar h-[30px] bg-black flex items-center justify-center text-white text-sm gap-4 fullwidth">
        <div>Get 10% instant discount on order above 1499$ &#127881;</div>
        <div className="sm:flex items-center gap-2 hidden">
          Shop now <ArrowRightIcon></ArrowRightIcon>
        </div>
      </div>
      <div className="flex items-center w-full sm:py-2 flex-wrap pt-0 pb-2">
        <p className="my-2 font-extrabold text-2xl sm:flex-none text-orange-500 flex-1 order-1">
          DUMBLES.IO
        </p>
        <div className="flex-1 flex items-center justify-center gap-1 order-3 sm:order-2 sm:basis-4/12">
          <Tabs
            value={selected}
            onValueChange={onTabChange}
            className="w-full sm:w-max"
          >
            <TabsList className="w-full">
              <TabsTrigger
                value="dashboard"
                className="flex-1"
                onClick={() => {
                  navigate("dashboard");
                }}
              >
                Dashboard
              </TabsTrigger>
              <TabsTrigger
                value="products"
                className="flex-1"
                onClick={() => {
                  navigate("product");
                }}
              >
                Products
              </TabsTrigger>
              <TabsTrigger value="explore" className="flex-1">
                Explore
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex items-center justify-center my-2 order-2 sm:order-3 gap-1">
          <Button
            variant={"ghost"}
            size={"icon"}
            className="rounded-full"
            onClick={() => navigate("/search")}
          >
            <MagnifyingGlassIcon width={25} height={25}></MagnifyingGlassIcon>
          </Button>

          {user != null ? (
            <UserProfile user={user} setUser={setUser} />
          ) : (
            <div className="flex gap-1">
              <Button
                variant={"outline"}
                className="hidden sm:block"
                onClick={() => navigate("/login")}
              >
                Sign Up
              </Button>
              <Button onClick={() => navigate("/login")}>Sign In</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Toolbar;

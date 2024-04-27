import { Button } from "./ui/button";
import { supabase } from "../Constants/supabase";
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Userprofile from "../Interfaces/UserProfile";
import { ArrowRightIcon, HeartIcon } from "@radix-ui/react-icons";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import UserProfile from "./UserProfile";
import { UserContext } from "../Context/UserContext";
import axiosHttp from "../axiosHandler/axiosHandler";
import { CartContext } from "../Context/CartContext";

const Toolbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const routes = ["/dashboard", "/productlist"];

  const [selected, setSelected] = useState("dashboard");
  const [user, setUser] = useState<Userprofile | null>(null);
  const currentUser = useContext(UserContext)
  const cartContext = useContext(CartContext)

  async function getUser() {
    try {
      const userResponse = await supabase.auth.getUser();
      const identityData = 
      userResponse?.data?.user?.identities?.[0]?.identity_data;
      const temp = {
        email : identityData!.email,
        sub : identityData!.sub
      }
      currentUser?.setUserData(temp)
      return identityData;
    } catch (error) {
      console.error("Failed to Get User Identity Data: ", error);
      return null;
    }
  }

  useEffect(() => {
    const matchedRoute = routes.find((route) =>
      matchPath(route, location.pathname)
    );
    if (matchedRoute) {
      setSelected(matchedRoute.slice(1)); // Remove the leading '/' from the route
    }
  }, [location.pathname]);

  useEffect(() => {
    getUser().then((res: Userprofile | any) => {
      setUser(res);
    });
  }, []);

  useEffect(()=>{
    if(user?.sub){
      getCart()
    }
  },[user])

  async function getCart() {
    const cartData = await axiosHttp.get(`cart/${user?.sub}`)
    cartContext?.setCart(cartData.data)
  }

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
        <Link
          className="my-2 font-extrabold text-2xl sm:flex-none text-primary flex-1 order-1"
          to={"/dashboard"}
        >
          DUMBLES.IO
        </Link>
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
                value="productlist"
                className="flex-1"
                onClick={() => {
                  navigate("productlist");
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
            className="rounded-full hover:text-red-500"
          >
            <HeartIcon width={25} height={25}></HeartIcon>
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

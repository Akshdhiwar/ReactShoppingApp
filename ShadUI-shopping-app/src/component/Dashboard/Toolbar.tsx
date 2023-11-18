import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuShortcut,
} from "../../components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { supabase } from "../../Constants/supabase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Userprofile from "../../Interfaces/UserProfile";
import { HeartIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";

const Toolbar = () => {
  const navigate = useNavigate();
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

  function logout() {
    supabase.auth.signOut();
    setUser(null);
  }
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center w-full py-2 flex-wrap px-2 max-w-screen-2xl">
        <p className="my-2 font-extrabold text-2xl sm:flex-none text-orange-500 flex-1 order-1">
          DUMBLES.IO
        </p>
        <div className="flex-1 flex items-center justify-center gap-1 order-3 sm:order-2 sm:basis-4/12">
          <Tabs defaultValue="dashboard " className="w-full sm:w-max">
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
            <div className="flex gap-1">
              <Button variant={"ghost"} size={"icon"} className="rounded-full">
                <HeartIcon width={25} height={25}></HeartIcon>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user?.picture} alt="@shadcn" />
                      <AvatarFallback>
                        {user?.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user?.name}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user?.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      Profile
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Billing
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Settings
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>New Team</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
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

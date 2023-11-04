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
import { useState } from "react";
import Userprofile from "../../Interfaces/UserProfile";

const Toolbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<Userprofile>();

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

  getUser().then((res: Userprofile | any) => {
    setUser(res);
  });

  function logout() {
    supabase.auth.signOut();
    navigate("/");
  }
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center w-full py-2 flex-wrap px-2 max-w-screen-2xl">
        <p className="my-2 font-extrabold text-2xl sm:flex-none text-orange-500 flex-1 order-1">
          DUMBLES.IO
        </p>
        <div className="flex-1 flex items-center justify-center gap-1 order-3 sm:order-2 sm:basis-4/12">
          <Button variant={"ghost"} className="sm:flex-none flex-1">
            Products
          </Button>
          <Button variant={"ghost"} className="sm:flex-none flex-1">
            Catagories
          </Button>
          <Button variant={"ghost"} className="sm:flex-none flex-1">
            Explore
          </Button>
        </div>
        <div className="flex items-center justify-center my-2 order-2 sm:order-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
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
      </div>
    </div>
  );
};

export default Toolbar;

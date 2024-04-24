import {
  DiscordLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <div className="content-grid bg-neutral-900 p-10 pb-5 px-3">
      <div className="grid sm:grid-cols-3 gap-5">
        <div className="flex flex-col gap-2">
          <p className=" font-extrabold text-2xl text-white">DUMBLES.IO</p>
          <div className="flex gap-2">
            <Input className="border-slate-700 border-t-0 border-x-0 text-white"></Input>
            <Button
              variant={"outline"}
              className="text-slate-300 border-slate-700"
            >
              Subscribe
            </Button>
          </div>
          <p className="text-muted-foreground">
            Get exiting offers and updates on newly upcoming products &#127881;
          </p>
        </div>
        <div className=" flex">
          <div className="text-slate-300 space-y-1">
            <p className="font-semibold text-xl">Address</p>
            <div className="text-muted-foreground">
              <p>Phone :- 9876543210</p>
              <p>
                Address :- 123 Main Street, Springfield, Anytown, State ABC,
                12345, Country XYZ
              </p>
            </div>
          </div>
        </div>
        <div className=" flex w-full">
          <div className="text-slate-300 space-y-1 w-full">
            <p className="font-semibold text-xl">Connect</p>
            <div className="text-muted-foreground grid sm:grid-cols-1 grid-cols-2 gap-2">
              <a className="flex gap-1 items-center hover:text-white hover:cursor-pointer w-min">
                <TwitterLogoIcon height={18} width={18}></TwitterLogoIcon>
                Twitter
              </a>
              <a className="flex gap-1 items-center hover:text-white hover:cursor-pointer w-min">
                <DiscordLogoIcon height={18} width={18}></DiscordLogoIcon>
                Discord
              </a>
              <a className="flex gap-1 items-center hover:text-white hover:cursor-pointer w-min">
                <InstagramLogoIcon height={18} width={18}></InstagramLogoIcon>
                Instagram
              </a>
              <a className="flex gap-1 items-center hover:text-white hover:cursor-pointer w-min">
                <LinkedInLogoIcon height={18} width={18}></LinkedInLogoIcon>
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="text-muted-foreground text-center mt-2">
        Copyright © 2024 Dumbles.io. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

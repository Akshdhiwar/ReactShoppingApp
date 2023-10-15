import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";

const Toolbar = () => {
  return (
    <div className="flex items-center w-full py-2 flex-wrap px-2 sm:px-0">
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
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Toolbar;

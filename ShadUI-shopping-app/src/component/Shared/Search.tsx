import { Cross1Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen h-full bg-black relative ">
      <div className="h-full flex justify-center lg:items-center flex-col ">
        <div className="lg:w-[40%] w-[80%] flex bg-white p-3 px-6 gap-2 m-4 rounded-full items-center">
          <Input type="text" className="rounded-lg" />
          <Button size={"icon"} className="rounded-full px-2">
            <MagnifyingGlassIcon width={25} height={25}></MagnifyingGlassIcon>
          </Button>
        </div>
        <div className="lg:w-[40%] flex text-white p-3 px-6 flex-col">
          <p className="font-semibold text-slate-400">Suggestions</p>
          <div className="text-lg font-bold">
            <p className="my-2">Bakpack</p>
            <p className="my-2">Belt</p>
            <p className="my-2">Shirt</p>
          </div>
        </div>
      </div>
      <div className="absolute lg:right-40 right-4 top-8 w-[10%] flex justify-center">
        <Button
          variant={"ghost"}
          size={"icon"}
          className="rounded-full"
          onClick={() => navigate("/")}
        >
          <Cross1Icon
            className="text-white hover:text-black"
            width={25}
            height={25}
          ></Cross1Icon>
        </Button>
      </div>
    </div>
  );
};

export default Search;

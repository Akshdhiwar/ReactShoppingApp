import { Cross1Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import Products from "../components/Products";
import iProduct from "../Interfaces/Products";

const Search = () => {
  const navigate = useNavigate();

  const sessionDataString = sessionStorage.getItem("products");
  let products: iProduct[] | null = null;
  if (sessionDataString !== null) {
    const sessionData: iProduct[] = JSON.parse(sessionDataString);
    products = sessionData;
    console.log("in local");
  }

  return (
    <div className="min-h-screen h-full bg-white relative dark:bg-black">
      <div className="content-grid">
        <div className="w-full flex items-center justify-between">
          <div className="flex lg:w-[40%] w-[80%] bg-white p-3 gap-2 m-4 rounded-full items-center">
            <Input type="text" className="rounded-full" />
            <Button size={"icon"} className="rounded-full px-2">
              <MagnifyingGlassIcon width={25} height={25}></MagnifyingGlassIcon>
            </Button>
          </div>
          <div>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="rounded-full"
              onClick={() => navigate("/")}
            >
              <Cross1Icon
                className="dark:text-white hover:text-black text-black dark:hover:text-white"
                width={25}
                height={25}
              ></Cross1Icon>
            </Button>
          </div>
        </div>
        <div className="flex text-white p-3 px-6 flex-col">
          <p className="font-semibold text-slate-400">Suggestions</p>
          <div className="text-lg font-bold">
            <p className="my-2">Bakpack</p>
            <p className="my-2">Belt</p>
            <p className="my-2">Shirt</p>
          </div>
        </div>
        <Products products={products} />
      </div>
    </div>
  );
};

export default Search;

import { Cross1Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import Products from "../components/Products";
import iProduct from "../Interfaces/Products";
import { useState } from "react";

const Search = () => {
  const navigate = useNavigate();
  const stringProducts = sessionStorage.getItem("products") as string;
  const products: iProduct[] | null = JSON.parse(stringProducts);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const searchProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    if (e.target.value == "") {
      return setFilteredProducts(products);
    }
    // Filter products based on the search term
    const filterProduct =
      filteredProducts?.filter((product) =>
        product.title.toLowerCase().includes(searchTerm)
      ) ?? products;

    // Use nullish coalescing for default value
    setFilteredProducts(filterProduct);
  };

  return (
    <div className="min-h-screen h-full bg-white relative dark:bg-black">
      <div className="content-grid">
        <div className="w-full flex items-center justify-between">
          <div className="flex lg:w-[40%] w-[80%] bg-white p-3 gap-2 m-4 rounded-full items-center">
            <Input
              type="text"
              className="rounded-full"
              onChange={searchProduct}
            />
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
        <div className="flex dark:text-white text-black p-3 px-6 flex-col">
          <p className="font-semibold text-slate-400">Suggestions</p>
          <div className="text-lg font-bold">
            {/* Suggestions can be dynamic or fetched based on user input */}
            <p className="my-2">Backpack</p>
            <p className="my-2">Belt</p>
            <p className="my-2">Shirt</p>
          </div>
        </div>
        {filteredProducts?.length == 0 ? (
          <h1>No Matching Product</h1>
        ) : (
          <Products products={filteredProducts} />
        )}
      </div>
    </div>
  );
};

export default Search;

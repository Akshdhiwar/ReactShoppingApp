import { ArrowRightIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import iProduct from "../../Interfaces/Products";
import { Button } from "../../components/ui/button";
import { CartContext } from "../../Context/CartContext";
import { useToast } from "../../components/ui/use-toast";

const Products = () => {
  const [data, setData] = useState<iProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const cart = useContext(CartContext);
  const { toast } = useToast();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=8")
      .then((data) => {
        const productsWithIsAdded = data.data.map((item: iProduct) => ({
          ...item,
          isAddedToCart: false,
        }));
        setData(productsWithIsAdded);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  function addProduct(items: iProduct) {
    items.isAddedToCart = true;
    cart?.addToCart(items);
    toast({
      title: `Product Added to Cart!`,
      description: `${items.title} was added to the cart! Enjoy shopping`,
    });
  }

  return (
    <>
      {loading ? (
        <p className="w-full h-12 text-2xl font-thin flex items-center justify-center">
          Loading....
        </p>
      ) : (
        <div className="w-full grid lg:grid-cols-4 gap-6 py-4 grid-cols-2">
          {data.map((items: iProduct) => {
            return (
              <div
                key={items.id}
                className="group flex flex-col hover:scale-105 hover:shadow-2xl hover:p-2 transition-all box-border hover:rounded-xl hover:cursor-pointer border-slate-300 hover:border-2"
              >
                <div className="relative transition-all rounded-lg group/img">
                  <img
                    src={items.image}
                    alt=""
                    loading="lazy"
                    className=" w-full object-cover aspect-square group-hover:rounded-lg transition p-6"
                  />
                  <div className="p-1 bg-red-500 text-xs text-white absolute rounded-2xl top-2 right-2">
                    -25%
                  </div>
                  <div className="group-hover/img:flex absolute top-0 left-0 bg-slate-300/50 w-full h-full gap-2 items-center hidden justify-center rounded-lg">
                    <p>View Product</p>
                    <ArrowRightIcon width={20} height={20}></ArrowRightIcon>
                  </div>
                </div>
                <h2 className="text-xl font-semibold mt-2 flex-1 line-clamp-2">
                  {items.title}
                </h2>
                <p className="line-clamp-2 text-sm text-slate-500">
                  {items.description}
                </p>
                <div className="my-2 flex gap-2">
                  <p className="font-semibold text-xl">${items.price}</p>
                  <p className="line-through text-sm">
                    ${items.price.toFixed(2)}
                  </p>
                </div>
                {items.isAddedToCart ? (
                  <div className="flex items-center justify-center h-9 border border-slate-400 rounded-lg">
                    <p>
                      ADDED TO CART
                      <span className=" text-green-500">&#x2714;</span>
                    </p>
                  </div>
                ) : (
                  <Button
                    className="w-full"
                    onClick={() => {
                      addProduct(items);
                    }}
                  >
                    Add to Cart
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Products;

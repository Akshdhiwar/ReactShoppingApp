import { useContext, useEffect, useState } from "react";
import iProduct from "../Interfaces/Products";
import { Button } from "./ui/button";
import { CartContext } from "../Context/CartContext";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

type ProductProps = {
  products: iProduct[] | null;
};

const Products: React.FC<ProductProps> = ({ products }) => {
  const navigate = useNavigate();

  if (products == null) return;
  const [loading, setLoading] = useState(products.length < 1);
  const cart = useContext(CartContext);

  useEffect(() => {
    setLoading(products.length < 1);
  }, [products]);

  function addProduct(items: iProduct) {
    event?.stopImmediatePropagation();
    items.isAddedToCart = true;
    cart?.addToCart(items);
    toast(`Product Added to Cart!`, {
      description: `"${items.title}" was added to the cart! Enjoy shopping`,
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
          {products.map((items: iProduct) => {
            return (
              <div
                key={items.id}
                className="group flex flex-col hover:scale-105 hover:shadow-2xl hover:p-2 transition-all box-border hover:rounded-xl hover:cursor-pointer border-slate-300 hover:border-2"
                onClick={() => navigate("/productDetail")}
              >
                <div className="relative transition-all rounded-lg">
                  <img
                    src={items.image}
                    alt=""
                    loading="lazy"
                    className=" w-full object-cover aspect-square transition p-6"
                  />
                  <div className="p-1 bg-red-500 text-xs text-white absolute rounded-2xl top-2 right-2">
                    -25%
                  </div>
                </div>
                <h2 className="text-xl font-semibold mt-2 flex-1 line-clamp-2">
                  {items.title}
                </h2>
                <p className="line-clamp-2 text-sm text-slate-500">
                  {items.description}
                </p>
                <div className="my-2 flex gap-2 mb-9 group-hover:mb-0">
                  <p className="font-semibold text-xl">${items.price}</p>
                  <p className="line-through text-sm">
                    ${items.price.toFixed(2)}
                  </p>
                </div>
                <div className="gap-1 lg:hidden group-hover:flex">
                  <Button
                    variant={"outline"}
                    className="w-full border border-orange-500 hidden lg:block"
                  >
                    Add to Wishlish
                  </Button>
                  {items.isAddedToCart ? (
                    <div className="flex items-center justify-center h-9 border border-slate-400 rounded-lg">
                      <p>
                        ADDED TO CART
                        <span className=" text-green-500">&#x2714;</span>
                      </p>
                    </div>
                  ) : (
                    <Button
                      className="w-full border border-orange-500"
                      variant={"outline"}
                      onClick={() => {
                        addProduct(items);
                      }}
                    >
                      Add to Cart
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Products;

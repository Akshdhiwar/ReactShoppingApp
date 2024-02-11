import { useContext, useEffect, useState } from "react";
import iProduct from "../Interfaces/Products";
import { Button } from "./ui/button";
import { CartContext } from "../Context/CartContext";
import { toast } from "sonner";
import { Link } from "react-router-dom";

type ProductProps = {
  products: iProduct[] | null;
};

const Products: React.FC<ProductProps> = ({ products }) => {
  const [loading, setLoading] = useState(
    products === null || products.length < 1
  );
  const cart = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState<{ [key: string]: boolean }>(
    {}
  );

  useEffect(() => {
    setLoading(products === null || products.length < 1);
  }, [products]);

  function addProduct(
    event: React.MouseEvent<HTMLButtonElement>,
    item: iProduct
  ) {
    event.stopPropagation();
    cart?.addToCart(item);
    item.isAddedToCart = true;
    setAddedToCart((prev) => ({ ...prev, [item.id]: true }));
    toast(`Product Added to Cart!`, {
      description: `"${item.title}" was added to the cart! Enjoy shopping`,
    });
  }

  if (products === null || loading) {
    return (
      <p className="w-full h-12 text-2xl font-thin flex items-center justify-center">
        Loading....
      </p>
    );
  }

  return (
    <div className="w-full grid lg:grid-cols-4 gap-6 py-4 grid-cols-2">
      {products.map((item: iProduct) => (
        <Link
          to={`/product/${item.id}`}
          key={item.id}
          className="group transition-all box-border hover:scale-105 hover:shadow-2xl hover:p-2 hover:rounded-xl hover:border-2 hover:cursor-pointer focus:scale-105 focus:shadow-2xl focus:p-2 focus:rounded-xl focus:border-2 focus:outline-none"
        >
          <div className=" flex flex-col lg:h-full">
            <div className="relative transition-all rounded-lg">
              <img
                src={item.image}
                alt=""
                loading="lazy"
                className=" w-full object-cover aspect-square transition p-6"
              />
              <div className="p-1 bg-red-500 text-xs text-white absolute rounded-2xl top-2 right-2">
                -25%
              </div>
            </div>
            <h2 className="text-xl font-semibold mt-2 flex-1 line-clamp-2">
              {item.title}
            </h2>
            <p className="line-clamp-2 text-sm text-slate-500">
              {item.description}
            </p>
            <div className="my-2 flex gap-2 lg:mb-0 lg:group-hover:mb-0 group-hover:mb-2">
              <p className="font-semibold text-xl">${item.price}</p>
              <p className="line-through text-sm">${item.price}</p>
            </div>
          </div>
          <div className="lg:hidden">
            {addedToCart[item.id] ? (
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
                onClick={(event) => {
                  event.preventDefault();
                  addProduct(event, item);
                }}
              >
                Add to Cart
              </Button>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;

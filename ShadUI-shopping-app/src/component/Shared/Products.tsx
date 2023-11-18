import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "../../components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";

// "https://fakestoreapi.com/products"

const Products = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=8").then((data) => {
      setData(data.data);
    });
  });

  return (
    <div className="w-full grid lg:grid-cols-4 gap-6 py-4 grid-cols-2">
      {data.map((e: any) => {
        return (
          <div
            key={e.id}
            className="group flex flex-col hover:scale-105 hover:shadow-2xl hover:p-2 transition-all box-border hover:rounded-xl hover:cursor-pointer border-slate-300 hover:border-2"
          >
            <div className="relative transition-all rounded-lg group/img">
              <img
                src={e.image}
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
              {e.title}
            </h2>
            <p className="line-clamp-2 text-sm text-slate-500">
              {e.description}
            </p>
            <div className="my-2 flex gap-2">
              <p className="font-semibold text-xl">${e.price}</p>
              <p className="line-through text-sm">
                ${parseFloat(e.price + 50.0).toFixed(2)}
              </p>
            </div>
            <Button className="w-full"> Add to Cart</Button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

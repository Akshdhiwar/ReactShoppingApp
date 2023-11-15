import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "../../components/ui/button";

const Products = () => {
  return (
    <div className="w-full grid lg:grid-cols-4 gap-4 py-4 grid-cols-2">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => {
        return (
          <div
            key={e}
            className="group hover:scale-105 hover:shadow-2xl hover:p-2 transition-all box-border hover:rounded-xl hover:cursor-pointer border-slate-300 hover:border-2"
          >
            <div className="relative transition-all rounded-lg group/img">
              <img
                src="./dumbles.jpg"
                alt=""
                className=" w-full object-cover aspect-square group-hover:rounded-lg transition "
              />
              <div className="p-1 bg-red-500 text-xs text-white absolute rounded-2xl top-2 right-2">
                -25%
              </div>
              <div className="group-hover/img:flex absolute top-0 left-0 bg-slate-300/80 w-full h-full gap-2 items-center hidden justify-center rounded-lg">
                <p>View Product</p>
                <ArrowRightIcon width={20} height={20}></ArrowRightIcon>
              </div>
            </div>

            <h2 className="text-xl font-semibold mt-2">Dubmles</h2>
            <p className="line-clamp-2 text-sm text-slate-500">
              High Quality Dumble with A grade rubber coating with steel grip
              made with machine engraving
            </p>
            <div className="my-2 flex gap-2">
              <p className="font-semibold text-xl">$199</p>
              <p className="line-through text-sm">$249</p>
            </div>
            <Button className="w-full"> Add to Cart</Button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

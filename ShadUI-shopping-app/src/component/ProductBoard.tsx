import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { AspectRatio } from "../components/ui/aspect-ratio";

interface ProductData {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: Array<string>;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

const ProductBoard = () => {
  const [productData, setProductData] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProductData(data.products));
  }, []);

  return (
    <div className="grid grid-cols-2 w-full gap-2 box-border md:grid-cols-4 p-2 pt-0">
      {productData.map((element: ProductData) => (
        <Card className="p-2 flex flex-col gap-1 m-0">
          <AspectRatio ratio={16/9} className="overflow-hidden">
            <img
              src={element.thumbnail}
              className="object-cover rounded-sm bg-center"
            ></img>
          </AspectRatio>
          <p>{element.title}</p>
          <p className="font-light">{element.price}</p>
          <div className="flex items-center justify-between">
            <Button variant={"secondary"}>Add to cart</Button>
            <Button variant={"default"}>View</Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProductBoard;

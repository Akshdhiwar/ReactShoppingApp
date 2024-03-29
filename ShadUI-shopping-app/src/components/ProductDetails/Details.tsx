import React, { useContext, useEffect } from "react";
import iProduct from "../../Interfaces/Products";
import StarRating from "./StarRating";
import { CheckCircledIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardHeader } from "../ui/card";
import Quantity from "./Quantity";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { LockIcon, RotateCcw, StarIcon, TruckIcon } from "lucide-react";
import { CartContext } from "../../Context/CartContext";

interface DetailsProps {
  product: iProduct | undefined;
}

const Details: React.FC<DetailsProps> = ({ product }) => {
  const cart = useContext(CartContext);

  function checkProductInCart(productId: number | undefined) {
    return cart?.cart.some((ele) => ele.id === productId);
  }

  useEffect(() => {
    checkProductInCart(product?.id);
  }, [cart?.cart]);

  return (
    <div className="flex flex-col gap-2">
      <p className="text-4xl font-bold tracking-tight">{product?.title}</p>
      <div className="flex items-center gap-2">
        <StarRating rating={Number(product?.rating?.rate)}></StarRating>
        <p className="text-muted-foreground text-slate-400">
          {product?.rating?.count} Reviews
        </p>
      </div>
      <div className="flex items-center justify-between text-green-500 font-semibold gap-1">
        <div className="flex gap-1 items-center">
          <CheckCircledIcon height={18} width={18} />
          <p>In Stock</p>
        </div>

        <Button variant={"secondary"}>
          Add to Wishlist{" "}
          <HeartFilledIcon className="text-red-500" height={18} width={18} />
        </Button>
      </div>
      <Card>
        <CardHeader>
          <div className="flex gap-1">
            <p className="text-4xl font-bold tracking-tight">
              ${product?.price}
            </p>
            <p className="font-thin line-through">
              {(Number(product?.price) + 5).toFixed(2)}
            </p>
          </div>
          <p>price per unit</p>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Quantity product={product} />
          <div className="flex gap-2 sm:flex-row flex-col">
            <Button className="flex-1">Buy</Button>
            {checkProductInCart(product?.id) ? (
              <div className="flex items-center justify-center h-9 border border-slate-400 rounded-lg flex-1">
                <p>
                  ADDED TO CART
                  <span className=" text-green-500">&#x2714;</span>
                </p>
              </div>
            ) : (
              <Button
                className="flex-1 border border-orange-500"
                variant={"outline"}
                onClick={() => {
                  cart?.addToCart(product!);
                }}
              >
                Add to cart
              </Button>
            )}
          </div>
          <Separator />
          <div className="grid gap-2 sm:grid-cols-2 grid-cols-1">
            <div className="text-muted-foreground text-slate-400 flex items-center gap-2">
              <TruckIcon height={16} width={16} />
              <p>Worldwide Shipping</p>
            </div>
            <div className="text-muted-foreground text-slate-400 flex items-center gap-2">
              <LockIcon height={15} width={15} />
              <p>Secure Payment</p>
            </div>
            <div className="text-muted-foreground text-slate-400 flex items-center gap-2">
              <StarIcon height={15} width={15} />
              <p>1 Year Brand Warranty</p>
            </div>
            <div className="text-muted-foreground text-slate-400 flex items-center gap-2">
              <RotateCcw height={15} width={15} />
              <p>7 Days Replacement</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <p className="text-lg text-muted-foreground">{product?.description}</p>
    </div>
  );
};

export default Details;

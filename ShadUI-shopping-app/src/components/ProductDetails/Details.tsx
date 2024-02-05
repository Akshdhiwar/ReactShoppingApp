import React from "react";
import iProduct from "../../Interfaces/Products";
import StarRating from "./StarRating";
import { CheckCircledIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardHeader } from "../ui/card";
import Quantity from "./Quantity";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { LockIcon, RotateCcw, StarIcon, TruckIcon } from "lucide-react";

interface DetailsProps {
  product: iProduct | null;
}

const Details: React.FC<DetailsProps> = ({ product }) => {
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
          <Quantity quantity={product?.quantity} />
          <div className="flex gap-2 sm:flex-row flex-col">
            <Button className="flex-1">Buy</Button>
            <Button
              className="flex-1 border border-orange-500"
              variant={"outline"}
            >
              Add to cart
            </Button>
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

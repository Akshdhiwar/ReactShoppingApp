import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import React from "react";
// import { Input } from "../ui/input";

interface QuantityProps {
  quantity: number | undefined;
}

const Quantity: React.FC<QuantityProps> = ({ quantity }) => {
  return (
    <div>
      <div className="flex gap-2 max-w-[350px] items-center">
        <Button variant={"outline"}>
          <MinusIcon />
        </Button>
        {/* <Input className="text-center"></Input> */}
        <p className="flex-1 text-center">
          Qty : {quantity == undefined ? 0 : quantity}
        </p>
        <Button variant={"outline"}>
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};

export default Quantity;

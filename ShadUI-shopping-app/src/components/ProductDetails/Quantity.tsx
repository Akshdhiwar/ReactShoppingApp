import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import React, { Dispatch, SetStateAction } from "react";
interface QuantityProps {
  quantity : number
  setQuantity : Dispatch<SetStateAction<number>>
}

const Quantity: React.FC<QuantityProps> = ({ setQuantity , quantity }) => {

  return (
    <div>
      <div className="flex gap-2 max-w-[350px] items-center">
        <Button
          variant={"outline"}
          disabled={quantity === 1}
          onClick={() => setQuantity(prev => prev -1) }
        >
          <MinusIcon />
        </Button>
        <p className="flex-1 text-center">Qty : {quantity}</p>
        <Button variant={"outline"} onClick={() => setQuantity(prev => prev +1)}>
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};

export default Quantity;

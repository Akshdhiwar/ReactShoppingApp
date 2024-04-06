import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import React, { useContext } from "react";
import iProduct from "../../Interfaces/Products";
import { CartContext } from "../../Context/CartContext";
// import { Input } from "../ui/input";

interface QuantityProps {
  product: iProduct | undefined;
}

const Quantity: React.FC<QuantityProps> = ({ product }) => {
  const cart = useContext(CartContext);

  // Find the quantity of the current product in the cart
  let quantity: number | undefined = 1; // Default quantity
  const productInCart = cart?.cart.find((ele) => ele.ID === product?.ID);
  if (productInCart) {
    quantity = productInCart.quantity;
  }

  return (
    <div>
      <div className="flex gap-2 max-w-[350px] items-center">
        <Button
          variant={"outline"}
          disabled={quantity === 1}
          onClick={() => cart?.removeQuantity(product!)}
        >
          <MinusIcon />
        </Button>
        <p className="flex-1 text-center">Qty : {quantity}</p>
        <Button variant={"outline"} onClick={() => cart?.addQuantity(product!)}>
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};

export default Quantity;

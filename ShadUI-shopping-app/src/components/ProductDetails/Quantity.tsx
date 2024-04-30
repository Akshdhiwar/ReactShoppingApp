import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import React, { useContext } from "react";
import iProduct from "../../Interfaces/Products";
import { CartContext } from "../../Context/CartContext";
import { UserContext } from "../../Context/UserContext";
import { useToast } from "../ui/use-toast";
import axiosHttp from "../../axiosHandler/axiosHandler";
// import { Input } from "../ui/input";

interface QuantityProps {
  product: iProduct | undefined;
}

const Quantity: React.FC<QuantityProps> = ({ product }) => {
  const cart = useContext(CartContext);
  const user = useContext(UserContext);
  const {toast} = useToast();

  // Find the quantity of the current product in the cart
  let quantity: number | undefined = 1; // Default quantity
  const productInCart : any = cart?.cart?.find((ele:any) => ele.Product?.ID === product?.ID);
  if (productInCart) {
    quantity = productInCart.Quantity;
  }

  async function addQuantity(id: string) {

    const payload = {
      "UserID": user?.user?.sub
    }

    await axiosHttp.post(`cart/inc/${id}`, payload).then(() => {
      toast({
        title: "Success",
        description: "Added Quantity"
      })

      cart?.addQuantity(id);
    }).catch((error)=>{
      console.error(error)
    })
  }

  async function removeQuantity(id: string) {

    const payload = {
      "UserID": user?.user?.sub
    }

    await axiosHttp.post(`cart/dec/${id}`, payload).then(() => {
      toast({
        title: "Success",
        description: "Removed Quantity"
      })

      cart?.removeQuantity(id);
    }).catch((error)=>{
      console.error(error)
    })
  }

  return (
    <div>
      <div className="flex gap-2 max-w-[350px] items-center">
        <Button
          variant={"outline"}
          disabled={quantity === 1}
          onClick={() => removeQuantity(product!.ID)}
        >
          <MinusIcon />
        </Button>
        <p className="flex-1 text-center">Qty : {quantity}</p>
        <Button variant={"outline"} onClick={() => addQuantity(product!.ID)}>
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};

export default Quantity;

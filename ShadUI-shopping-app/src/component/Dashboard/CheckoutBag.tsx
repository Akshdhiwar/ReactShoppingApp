import { BackpackIcon } from "@radix-ui/react-icons";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CheckoutBag = () => {
  const cartItems = useContext(CartContext);
  let totalPrice = 0;

  if (cartItems?.cart) {
    for (const item of cartItems.cart) {
      totalPrice += item.price;
    }
  }
  return (
    <Dialog>
      <DialogTrigger className=" relative">
        <Button
          size={"icon"}
          className="flex items-center justify-center h-12 w-12 p-3 rounded-full"
        >
          <BackpackIcon width={30} height={30} />
        </Button>
        {cartItems!.cart.length > 0 ? (
          <div className="p-1 rounded-sm absolute w-6 -top-2 -right-2 bg-red-500 text-xs text-white">
            {cartItems?.cart.length}
          </div>
        ) : null}
      </DialogTrigger>
      <DialogContent className="w-[90%] rounded-xl">
        <DialogHeader>
          <DialogTitle>Product Checkout </DialogTitle>
        </DialogHeader>
        {cartItems?.cart.length == 0 ? (
          <div className="text-center">No items in cart</div>
        ) : (
          <div className="flex gap-2 flex-col">
            {cartItems?.cart.map((ele) => {
              return (
                <div className="flex justify-between items-center" key={ele.id}>
                  <div className="flex gap-2 items-center">
                    <img
                      src={ele.image}
                      alt=""
                      className=" w-24 aspect-square object-cover hover:scale-110 transition bg-slate-500 rounded-md"
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold">{ele.title}</p>
                      <p className="flex font-light text-sm">Quantity : 1</p>
                      <p className="flex font-light text-sm">Color : Blue</p>
                    </div>
                  </div>
                  <p className="font-semibold">${ele.price}</p>
                </div>
              );
            })}
            <Separator className="h-[1px] bg-black"></Separator>
            <div className="flex justify-between">
              <p className="font-semibold">Total</p>
              <p className="font-semibold">${totalPrice.toFixed(2)}</p>
            </div>
          </div>
        )}

        <DialogFooter>
          <Button type="submit">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutBag;

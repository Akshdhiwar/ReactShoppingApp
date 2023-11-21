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

  const img =
    "https://img.freepik.com/free-psd/realistic-isolated-blue-backpack-transparent-background_125540-3532.jpg?w=1060&t=st=1699437849~exp=1699438449~hmac=98a09bf837e05f72ca7948a9622eedccb803f5205da6d0cd1e4ef38bf4581a2a";

  return (
    <Dialog>
      <DialogTrigger className=" relative">
        <Button
          size={"icon"}
          className="flex items-center justify-center h-12 w-12 p-3 rounded-full"
        >
          <BackpackIcon width={30} height={30} />
        </Button>
        <div className="p-1 rounded-sm absolute -top-2 -right-2 bg-red-500 text-xs text-white">
          {cartItems?.cart.length}
        </div>
      </DialogTrigger>
      <DialogContent className="w-[90%] rounded-xl">
        <DialogHeader>
          <DialogTitle>Product Checkout </DialogTitle>
        </DialogHeader>
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
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <img
                src={img}
                alt=""
                className=" w-24 aspect-square object-cover hover:scale-110 transition bg-slate-500 rounded-md"
              />
              <div className="flex flex-col">
                <p className="font-semibold">Backpack</p>{" "}
                <p className="flex font-light text-sm">Quantity : 1</p>{" "}
                <p className="flex font-light text-sm">Color : Blue</p>
              </div>
            </div>
            <p className="font-semibold">$1989</p>
          </div>
          <Separator className="h-[1px] bg-black"></Separator>
          <div className="flex justify-between">
            <p className="font-semibold">Total</p>
            <p className="font-semibold">$19809</p>
          </div>
        </div>
        <DialogFooter>
          {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
          <Button type="submit">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutBag;

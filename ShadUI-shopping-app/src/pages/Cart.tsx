import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import { ArrowLeft, Backpack } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MinusIcon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";

//hello 

const Cart = () => {
  const cartItems = useContext(CartContext);
  const navigate = useNavigate();
  let totalPrice = 0;

  if (cartItems?.cart) {
    for (const item of cartItems.cart) {
      totalPrice += item.Price * item.quantity!;
    }
  }

  return (
    <div className="content-grid">
      <div>
        <div className="flex w-full relative">
          <Button
            variant={"ghost"}
            className="absolute flex gap-1"
            onClick={() => {
              navigate(-1);
            }}
          >
            <ArrowLeft height={20} width={20}></ArrowLeft> <p>Back</p>
          </Button>
          <div className="flex items-center font-semibold text-xl self-center w-full justify-center gap-2">
            <Backpack width={24} height={24}></Backpack>
            My Cart
          </div>
        </div>
        <div>
          <div className="py-4">
            {cartItems?.cart.length == 0 ? (
              <div className="text-center">
                <h1 className="text-2xl font-semibold">No items in cart</h1>
              </div>
            ) : (
              <div className="flex gap-2 flex-col">
                {cartItems?.cart.map((ele) => {
                  return (
                    <div>
                      <Separator className="h-[1px] bg-slate-600"></Separator>
                      <div
                        className="flex justify-between items-center p-4 flex-wrap"
                        key={ele.ID}
                      >
                        <div className="flex gap-2 items-center sm:w-1/2 w-[80%] order-1">
                          <img
                            src={ele.Image}
                            alt=""
                            className=" w-24 aspect-square object-cover hover:scale-110 transition bg-slate-500 rounded-md"
                          />
                          <div className="flex flex-col">
                            <p className="font-semibold">{ele.Title}</p>
                            <p className="flex font-light text-sm">
                              Color : Blue
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-1 items-center sm:justify-center justify-between gap-2 sm:order-2 order-3 sm:mt-0 mt-2">
                          <div className="flex gap-2 items-center">
                            <Button
                              variant={"outline"}
                              size={"icon"}
                              className="h-7 w-7"
                              disabled={ele.quantity === 1}
                              onClick={() => cartItems.removeQuantity(ele)}
                            >
                              <MinusIcon />
                            </Button>
                            {ele.quantity}
                            <Button
                              variant={"outline"}
                              size={"icon"}
                              className="h-7 w-7"
                              onClick={() => cartItems.addQuantity(ele)}
                            >
                              <PlusIcon />
                            </Button>
                          </div>

                          <Button
                            variant={"outline"}
                            size={"icon"}
                            className="h-7 w-7 hover:border-red-500"
                            onClick={() => cartItems.removeFromCart(ele.ID)}
                          >
                            <TrashIcon color="red" />
                          </Button>
                        </div>
                        <p className="font-semibold sm:w-[10%] flex justify-end sm:order-3 order-2">
                          ${ele.Price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  );
                })}
                <Separator className="h-[1px] bg-black"></Separator>
                <div className="flex justify-between p-4">
                  <p className="font-semibold">Total</p>
                  <p className="font-semibold">${totalPrice.toFixed(2)}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

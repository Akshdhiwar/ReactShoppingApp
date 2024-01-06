import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import { ArrowLeft, Backpack } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useContext(CartContext);
  const navigate = useNavigate();
  let totalPrice = 0;

  if (cartItems?.cart) {
    for (const item of cartItems.cart) {
      totalPrice += item.price;
    }
  }

  return (
    <div className=" content-grid">
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
                        className="flex justify-between items-center p-4"
                        key={ele.id}
                      >
                        <div className="flex gap-2 items-center">
                          <img
                            src={ele.image}
                            alt=""
                            className=" w-24 aspect-square object-cover hover:scale-110 transition bg-slate-500 rounded-md"
                          />
                          <div className="flex flex-col">
                            <p className="font-semibold">{ele.title}</p>
                            <p className="flex font-light text-sm">
                              Quantity : 1
                            </p>
                            <p className="flex font-light text-sm">
                              Color : Blue
                            </p>
                          </div>
                        </div>
                        <p className="font-semibold">${ele.price.toFixed(2)}</p>
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

import { useContext, useEffect, useState } from "react";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import { ArrowLeft, Backpack } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MinusIcon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { UserContext } from "../Context/UserContext";
import axiosHttp from "../axiosHandler/axiosHandler";
import { CartContext } from "../Context/CartContext";
import { AxiosRequestConfig } from "axios";
import { useToast } from "../components/ui/use-toast";

const Cart = () => {
  const user = useContext(UserContext)
  const cartContext = useContext(CartContext)
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0)
  const { toast } = useToast()


  useEffect(() => {
    let total = 0
    cartContext?.cart.map((ele: any) => {
      total = ele.Product.Price + total
    })
    setTotalPrice(total)
  }, [])

  async function deleteProduct(id: string) {

    const payload = {
      user_id: user?.user?.sub
    };

    const config: AxiosRequestConfig = {
      data: payload // Set the payload as the data property in the Axios request config
    };

    try {
      axiosHttp.delete(`cart/delete/${id}`, config)
      cartContext?.removeFromCart(id)
    }
    catch (error) {
      console.error(error)
    }
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

      cartContext?.addQuantity(id);
    }).catch((error) => {
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

      cartContext?.removeQuantity(id);
    }).catch((error) => {
      console.error(error)
    })
  }

  function checkout(){

    let checkoutProducts : any[] = []

    cartContext?.cart.forEach((item : any)=>{
      let product = {
        price_id : item.Product.PriceID,
        quantity : item.Quantity
      }
      checkoutProducts.push(product)
    })
    

    let payload = {
      products : checkoutProducts
    }

    axiosHttp.post("/create-checkout-session" , payload ).then(
      (res) => {
        window.location.href = res.data.url
      }
    )
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
            {cartContext?.cart?.length == 0 ? (
              <div className="text-center">
                <h1 className="text-2xl font-semibold">No items in cart</h1>
              </div>
            ) : (
              <div className="flex gap-2 flex-col">
                {cartContext?.cart?.map((ele: any) => {
                  return (
                    <div>
                      <Separator className="h-[1px] bg-slate-600"></Separator>
                      <div
                        className="flex justify-between items-center p-4 flex-wrap"
                        key={ele.Product.ID}
                      >
                        <div className="flex gap-2 items-center sm:w-1/2 w-[80%] order-1">
                          <img
                            src={ele && ele.Product.Image ? ele.Product.Image : ""}
                            alt=""
                            className=" w-24 aspect-square object-cover hover:scale-110 transition bg-slate-500 rounded-md"
                          />
                          <div className="flex flex-col">
                            <p className="font-semibold">{ele.Product.Title}</p>
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
                              disabled={ele.Quantity === 1}
                              onClick={() => removeQuantity(ele.Product.ID)}
                            >
                              <MinusIcon />
                            </Button>
                            {ele.Quantity}
                            <Button
                              variant={"outline"}
                              size={"icon"}
                              className="h-7 w-7"
                              onClick={() => addQuantity(ele.Product.ID)}
                            >
                              <PlusIcon />
                            </Button>
                          </div>

                          <Button
                            variant={"outline"}
                            size={"icon"}
                            className="h-7 w-7 hover:border-red-500"
                            onClick={() => deleteProduct(ele.Product.ID)}
                          >
                            <TrashIcon color="red" />
                          </Button>
                        </div>
                        <p className="font-semibold sm:w-[10%] flex justify-end sm:order-3 order-2">
                          ${ele.Product.Price.toFixed(2)}
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
                <Button onClick={checkout}>Checkout</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

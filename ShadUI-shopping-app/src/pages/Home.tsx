import { Suspense, useContext } from "react";
import Toolbar from "../components/Toolbar";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { Button } from "../components/ui/button";
import { BackpackIcon } from "@radix-ui/react-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import Loader from "../components/ui/Loader";
import Footer from "../components/Footer";
import { ScrollArea } from "../components/ui/scroll-area";

const Home = () => {
  const [right, setRight] = useState(0);
  const location = useLocation();
  const cartItems = useContext(CartContext);
  const navigate = useNavigate();
  const [cartLength , setCartLength] = useState<number>(0)

  useEffect(() => {
    const updatePosition = () => {
      const right =
        window.innerWidth > 1536 ? (window.innerWidth - 1536) / 2 : 0;
      setRight(right);
    };
    window.addEventListener("resize", updatePosition);
    updatePosition();

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  });

  useEffect(()=>{
    setCartLength(cartItems?.cart == undefined ? 0 : cartItems?.cart?.length)
  },[cartItems?.cart])

  return (
      <ScrollArea className="flex flex-col justify-center max-h-screen">
        <Toolbar />
        <div className="flex-1">
          <Suspense fallback={<Loader></Loader>}>
            <Outlet></Outlet>
          </Suspense>
        </div>
        <div className="mt-2">
          <Footer />
        </div>

        {location.pathname.includes("cart") ? null : (
          <div
            className="fixed bottom-0 m-4 border-white border-2 rounded-full"
            style={{ right: right }}
          >
            <div className="relative">
              <Button
                size={"icon"}
                className="flex items-center justify-center h-12 w-12 p-3 rounded-full"
                onClick={() => {
                  navigate("cart");
                }}
              >
                <BackpackIcon width={30} height={30} />
              </Button>
              {cartLength > 0 ? (
                <div className="p-1 rounded-sm absolute w-6 -top-2 -right-2 flex items-center justify-center bg-red-500 text-xs text-white">
                  {cartLength}
                </div>
              ) : null}
            </div>
          </div>
        )}
      </ScrollArea>
  );
};

export default Home;

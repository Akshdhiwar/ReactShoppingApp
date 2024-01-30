import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, lazy, Suspense, useEffect } from "react";
import { CartContext } from "./Context/CartContext";
import iProduct from "./Interfaces/Products";
import { Toaster } from "./components/ui/sonner";
import Home from "./pages/Home";
import Loader from "./components/ui/loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const ProductView = lazy(() => import("./pages/ProductView"));
const Login = lazy(() => import("./pages/Login"));
const Cart = lazy(() => import("./pages/Cart"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const NoMatch = lazy(() => import("./components/NoMatch"));

function App() {
  let cartString = localStorage.getItem("cart") as string;
  if (cartString == null) cartString = "[]";
  const [cart, setCart] = useState<iProduct[]>(JSON.parse(cartString));

  const addToCart = (product: iProduct) => {
    if (checkCart(product.id)) return;
    product.quantity = 1;
    setCart((prevCart) => [...prevCart, product]);
    const newCart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const addQuantity = (product: iProduct) => {
    if (checkCart(product.id)) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity! + 1 };
        }
        return item;
      });
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };
  const removeQuantity = (product: iProduct) => {
    if (checkCart(product.id)) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity! - 1 };
        }
        return item;
      });
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const checkCart = (productId: number): boolean => {
    return cart.some((item) => item.id === productId);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, addQuantity, removeQuantity }}
    >
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" Component={Home}>
            <Route index element={<Navigate to="dashboard" />}></Route>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="product" element={<ProductView />}></Route>
            <Route path="productDetail" element={<ProductDetails />}></Route>
            <Route path="cart" element={<Cart />}></Route>
          </Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
      <Toaster />
    </CartContext.Provider>
  );
}

export default App;

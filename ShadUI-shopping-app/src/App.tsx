import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import { CartContext } from "./Context/CartContext";
import iProduct from "./Interfaces/Products";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./Context/Theme-provider";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Loader from "./components/ui/loader";

const Search = lazy(() => import("./pages/Search"));
const ProductView = lazy(() => import("./pages/ProductView"));
const Login = lazy(() => import("./pages/Login"));
const Cart = lazy(() => import("./pages/Cart"));

function App() {
  const [cart, setCart] = useState<iProduct[]>([]);

  const addToCart = (product: iProduct) => {
    if (checkCart(product.id)) return;
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

  const checkCart = (productId: number): boolean => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" Component={Home}>
              <Route index element={<Navigate to="dashboard" />}></Route>
              <Route path="dashboard" Component={Dashboard}></Route>
              <Route path="product" Component={ProductView}></Route>
              <Route path="explore" Component={Dashboard}></Route>
              <Route path="cart" Component={Cart}></Route>
            </Route>
            <Route path="/login" Component={Login}></Route>
            <Route path="/search" Component={Search}></Route>
          </Routes>
        </Suspense>
        <Toaster />
      </CartContext.Provider>
    </ThemeProvider>
  );
}

export default App;

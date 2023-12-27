import "./App.css";
import Login from "./pages/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import { CartContext } from "./Context/CartContext";
import iProduct from "./Interfaces/Products";
import { Toaster } from "./components/ui/toaster";
import { ThemeProvider } from "./Context/Theme-provider";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const Search = lazy(() => import("./pages/Search"));
const ProductView = lazy(() => import("./pages/ProductView"));

function App() {
  const [cart, setCart] = useState<iProduct[]>([]);

  const addToCart = (product: iProduct) => {
    if (checkCart(product.id)) return;
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  const checkCart = (productId: number): boolean => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        <Suspense fallback="<h1>Loading...</h1>">
          <Routes>
            <Route path="/" Component={Home}>
              <Route index element={<Navigate to="dashboard" />}></Route>
              <Route path="dashboard" Component={Dashboard}></Route>
              <Route path="product" Component={ProductView}></Route>
              <Route path="explore" Component={Dashboard}></Route>
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

import "./App.css";
import Dashboard from "./component/Dashboard/Dashboard";
import Login from "./component/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import Search from "./component/Shared/Search";
import DashboardView from "./component/Dashboard/DashboardView";
import ProductView from "./component/Product/ProductView";
import { useState } from "react";
import { CartContext } from "./Context/CartContext";
import iProduct from "./Interfaces/Products";

function App() {
  const [cart, setCart] = useState<iProduct[]>([]);

  const addToCart = (product: iProduct) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {/* <Login></Login> */}
      <Routes>
        <Route path="/" Component={Dashboard}>
          <Route index element={<Navigate to="dashboard" />}></Route>
          <Route path="dashboard" Component={DashboardView}></Route>
          <Route path="product" Component={ProductView}></Route>
          <Route path="explore" Component={DashboardView}></Route>
        </Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/search" Component={Search}></Route>
      </Routes>
    </CartContext.Provider>
  );
}

export default App;

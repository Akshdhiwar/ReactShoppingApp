import "./App.css";
import Dashboard from "./component/Dashboard";
import { Route, Routes } from "react-router-dom";
import ProductBoard from "./component/ProductBoard";
import Products from "./component/Products";

function App() {
  return (
    <>
      <div className="main flex justify-center">
        <div className="max-w-[1400px] w-full">
          <Dashboard />
        </div>
      </div>
      <Routes>
        <Route index element={<ProductBoard />} />
        <Route path="/pro" element={<Products />}></Route>
      </Routes>
    </>
  );
}

export default App;

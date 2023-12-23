import axios from "axios";
import { useEffect, useState } from "react";
import Products from "../components/Products";
import iProduct from "../Interfaces/Products";

const ProductView = () => {
  const [data, setData] = useState<iProduct[] | null>([]);
  useEffect(() => {
    const sessionDataString = sessionStorage.getItem("products");

    if (sessionDataString !== null) {
      const sessionData: iProduct[] = JSON.parse(sessionDataString);
      setData(sessionData);
      console.log("in local");
    } else {
      axios.get("https://fakestoreapi.com/products").then((data) => {
        setData(data.data);
        console.log("in axios");
        sessionStorage.setItem("products", JSON.stringify(data.data));
      });
    }
  }, []);

  return (
    <div className="content-grid">
      <Products products={data} />
    </div>
  );
};

export default ProductView;

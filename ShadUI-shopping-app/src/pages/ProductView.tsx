import axios from "axios";
import { useEffect, useState } from "react";
import Products from "../components/Products";

const ProductView = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => setData(data.data));
  }, []);

  return (
    <div className="content-grid">
      <Products products={data} />
    </div>
  );
};

export default ProductView;

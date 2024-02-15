import axios from "axios";
import { useEffect, useState } from "react";
import Products from "../components/Products";
import iProduct from "../Interfaces/Products";
import Filter from "../components/Filter";

const ProductView = () => {
  const [data, setData] = useState<iProduct[] | null>([]);
  useEffect(() => {
    const sessionDataString = sessionStorage.getItem("products");

    if (sessionDataString !== null) {
      const sessionData: iProduct[] = JSON.parse(sessionDataString);
      setData(sessionData);
    } else {
      axios.get("https://fakestoreapi.com/products").then((data) => {
        setData(data.data);
        sessionStorage.setItem("products", JSON.stringify(data.data));
      });
    }
  }, []);

  function handleFilter(data: iProduct[]): void {
    setData(data);
  }

  return (
    <div className="content-grid">
      <Filter handleFilterData={handleFilter} />
      <Products products={data} />
    </div>
  );
};

export default ProductView;

import axios from "axios";
import { useEffect, useState } from "react";
import Products from "../components/Products";
import iProduct from "../Interfaces/Products";
import Filter from "../components/Filter";
import { useSessionStorage } from "../Custom hooks/useSessionStorage";

const ProductView = () => {
  const [data, setData] = useState<iProduct[] | null>([]);
  const { getItem, setItem } = useSessionStorage("products");
  useEffect(() => {
    const sessionDataString = getItem();

    if (sessionDataString !== null) {
      const sessionData: iProduct[] = sessionDataString;
      setData(sessionData);
    } else {
      axios.get("https://fakestoreapi.com/products").then((data) => {
        setData(data.data);
        setItem(data.data);
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

import axios from "axios";
import { useEffect, useState } from "react";
import Products from "../components/Products";
import iProduct from "../Interfaces/Products";
import Filter from "../components/Filter";
import { baseURL } from "../Constants/api";

const ProductView = () => {
  const [data, setData] = useState<iProduct[] | null>([]);

  useEffect(() => {
      axios.get(`${baseURL}products/`).then((data) => {
        setData(data.data);
      });
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

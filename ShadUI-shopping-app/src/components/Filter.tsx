import React, { useEffect, useState } from "react";
import iProduct from "../Interfaces/Products";
import axios from "axios";
import FilterByCategory from "./FilterBy/FilterByCategory";
import iFilter from "../Interfaces/Filter";
import FilterByRange from "./FilterBy/FilterByRange";
import FilterByBrand from "./FilterBy/FilterByBrand";
import { Button } from "./ui/button";

interface FilterProps {
  handleFilterData: (data: iProduct[]) => void;
}

const Filter: React.FC<FilterProps> = ({ handleFilterData }) => {
  let products: iProduct[] | null = [];

  const [filter, setFilter] = useState<iFilter>({
    category: "",
    range: 0,
    sort: "",
    brand: [],
  });

  const sessionDataString = sessionStorage.getItem("products");

  if (sessionDataString !== null) {
    const sessionData: iProduct[] = JSON.parse(sessionDataString);
    products = sessionData;
  } else {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      products = data.data;
      sessionStorage.setItem("products", JSON.stringify(data.data));
    });
  }

  useEffect(() => {
    // Run the onSubmit function whenever form values change
    onSubmit();
  }, [filter]); // Watch for changes in form values

  function onSubmit() {
    let filteredProducts = products;
    if (filter.range !== 0) {
      filteredProducts = filteredProducts!.filter((product) => {
        return product.price < filter.range;
      });
    }

    if (filter.category !== "") {
      filteredProducts = filteredProducts!.filter((product) => {
        return product.category === filter.category;
      });
    }

    if (filter.brand?.length !== 0) {
      debugger;
      filteredProducts = filteredProducts!.filter((product) => {
        return filter.brand.some((brand: string) =>
          product.title.toLowerCase().includes(brand)
        );
      });
    }

    handleFilterData(filteredProducts!);
    console.log(filter, filteredProducts);
  }

  function setData(data: iFilter) {
    setFilter(data);
  }

  function resetFilter() {
    console.log("hello");
    setFilter({
      category: "",
      sort: "",
      range: 0,
      brand: [],
    });

    console.log(filter);
  }

  return (
    <div className="grid lg:grid-cols-4 gap-2 grid-cols-2">
      <FilterByCategory getCategory={setData} filter={filter} />
      <FilterByRange getRange={setData} />
      <FilterByBrand getBrand={setData} filter={filter} />
      <div>
        <Button onClick={resetFilter}>Reset</Button>
      </div>
    </div>
  );
};

export default Filter;

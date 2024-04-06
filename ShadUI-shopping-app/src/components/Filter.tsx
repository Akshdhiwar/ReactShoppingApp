import React, { useEffect, useState } from "react";
import iProduct from "../Interfaces/Products";
import axios from "axios";
import iFilter from "../Interfaces/Filter";
import FilterByBrand from "./FilterBy/FilterByBrand";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import FilterBy from "./FilterBy/FilterBy";
import { FilterList } from "../Constants/filter";
import {
  Cross1Icon,
  MixerHorizontalIcon,
  ResetIcon,
} from "@radix-ui/react-icons";
import { useSessionStorage } from "../Custom hook/useSessionStorage";

interface FilterProps {
  handleFilterData: (data: iProduct[]) => void;
}

const Filter: React.FC<FilterProps> = ({ handleFilterData }) => {
  let products: iProduct[] | null = [];
  const { getItem, setItem } = useSessionStorage("products");

  const [showFilter, setShowFilter] = useState<boolean>(false);
  let dynamicClass = showFilter ? "flex" : "hidden";
  const [filter, setFilter] = useState<iFilter>({
    category: "",
    range: "",
    sort: "",
    brand: [],
    search: "",
  });

  const sessionDataString = getItem();

  if (sessionDataString !== undefined) {
    const sessionData: iProduct[] = sessionDataString;
    products = sessionData;
  } else {
    axios.get("https://go-backend.up.railway.app/api/v1/products/").then((data) => {
      products = data.data;
      setItem(data.data);
    });
  }

  useEffect(() => {
    // Run the onSubmit function whenever form values change
    onSubmit();
  }, [filter]); // Watch for changes in form values

  function onSubmit() {
    let filteredProducts = products;
    if (filter.range !== "") {
      filteredProducts = filteredProducts!.filter((product) => {
        return product.Price < Number(filter.range!);
      });
    }

    if (filter.category !== "") {
      filteredProducts = filteredProducts!.filter((product) => {
        return product.Category === filter.category;
      });
    }

    if (filter.brand?.length !== 0) {
      filteredProducts = filteredProducts!.filter((product) => {
        return filter.brand.some((brand: string) =>
          product.Title.toLowerCase().includes(brand)
        );
      });
    }

    if (filter.search !== "") {
      filteredProducts = filteredProducts!.filter((product) => {
        return product.Title.toLowerCase().includes(filter.search);
      });
    }

    handleFilterData(filteredProducts!);
  }

  function setData(data: iFilter) {
    setFilter(data);
  }

  function resetFilter() {
    setFilter({
      category: "",
      sort: "",
      range: "",
      brand: [],
      search: "",
    });
  }

  function searchProduct(event: React.ChangeEvent<HTMLInputElement>) {
    const searchTerm = event.target.value.toLowerCase();
    setFilter((prev: iFilter) => ({ ...prev, search: searchTerm }));
  }

  return (
    <div className="flex gap-2 flex-col lg:flex-row">
      <div className="flex lg:w-min gap-2">
        <Input
          placeholder="Search products..."
          className="lg:w-min h-8 w-full"
          value={filter.search}
          onChange={searchProduct}
        />
        <Button
          variant={"secondary"}
          size={"icon"}
          className="h-8 lg:hidden"
          onClick={() => setShowFilter((prev) => !prev)}
        >
          {showFilter ? <Cross1Icon></Cross1Icon> : <MixerHorizontalIcon />}
        </Button>
      </div>
      <div
        className={`w-full lg:flex items-center transition gap-3 justify-between ${dynamicClass}`}
      >
        <FilterBy
          updateFilter={setData}
          filter={filter.category}
          FilterData={FilterList[0]}
        />
        {/* <FilterBy
          updateFilter={setData}
          filter={filter.sort}
          FilterData={FilterList[1]}
        /> */}
        <FilterBy
          updateFilter={setData}
          filter={filter.range}
          FilterData={FilterList[2]}
        />
        <FilterByBrand
          updateFilter={setData}
          filter={filter.brand}
          FilterData={FilterList[3]}
        />
        <div className=" w-full flex-1 flex justify-end">
          <Button
            variant={"outline"}
            className="border-orange-500 h-8 lg:flex hidden"
            onClick={resetFilter}
          >
            Reset
          </Button>
          <Button
            variant={"outline"}
            className="h-8 lg:hidden"
            onClick={resetFilter}
            size={"icon"}
          >
            <ResetIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;

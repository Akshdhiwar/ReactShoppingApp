import React, { useEffect } from "react";
import { FilterList } from "../Constants/filter";
import iProduct from "../Interfaces/Products";
import { Checkbox } from "./ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface FilterProps {
  products: iProduct[] | null;
}

const Filter: React.FC<FilterProps> = ({ products }) => {
  useEffect(() => {
    console.log(products);
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between pb-2">Filter</div>
      <div className="grid lg:grid-cols-4 gap-2 grid-cols-2">
        {FilterList.map((element) => {
          return (
            <div key={element.filterName}>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={element.filterName} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{element.filterLabel}</SelectLabel>
                    {element.filterItems.map((item) => {
                      return (
                        <SelectItem value={item.value} key={item.value}>
                          {item.label}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          );
        })}
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Brand" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select Brand</SelectLabel>
              {[1, 2, 3].map((ele) => {
                return (
                  <div className="flex items-center gap-2 p-2 py-1" key={ele}>
                    <Checkbox id="WD" />
                    <label
                      htmlFor="WD"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      WD
                    </label>
                  </div>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Filter;

import { FilterList } from "../../Constants/filter";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import iFilter from "../../Interfaces/Filter";
import { Checkbox } from "../ui/checkbox";

interface FilterCategoryProps {
  getBrand: (data: any) => void;
  filter: iFilter;
}

const FilterByBrand: React.FC<FilterCategoryProps> = ({ getBrand, filter }) => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue
          placeholder={filter.brand.length == 0 ? "Brand" : filter.brand}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Brand</SelectLabel>
          {FilterList[3].filterItems.map((ele) => {
            return (
              <div className="flex items-center gap-2 p-2 py-1" key={ele.label}>
                <Checkbox
                  id={ele.label}
                  checked={filter.brand.includes(String(ele.value))}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      getBrand((prev: iFilter) => ({
                        ...prev,
                        brand: [...prev.brand, ele.value],
                      }));
                    } else {
                      getBrand((prev: iFilter) => ({
                        ...prev,
                        brand: prev.brand.filter((brand) => {
                          return brand !== ele.value;
                        }),
                      }));
                    }
                  }}
                />
                <label
                  htmlFor={ele.label}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {ele.label}
                </label>
              </div>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterByBrand;

import { FilterList } from "../../Constants/filter";
import iFilter from "../../Interfaces/Filter";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface FilterCategoryProps {
  getCategory: (data: any) => void;
  filter: iFilter;
}

const FilterByCategory: React.FC<FilterCategoryProps> = ({
  getCategory,
  filter,
}) => {
  return (
    <Select
      onValueChange={(value) => {
        getCategory((prev: iFilter) => ({
          ...prev,
          category: value,
        }));
      }}
    >
      <SelectTrigger className="w-full">
        <SelectValue
          placeholder={
            filter.category == "" ? FilterList[0].filterName : filter.category
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{FilterList[0].filterLabel}</SelectLabel>
          {FilterList[0].filterItems.map((item) => {
            return (
              <SelectItem value={String(item.value)} key={item.value}>
                {item.label}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterByCategory;

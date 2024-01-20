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
  getRange: (data: any) => void;
}
const FilterByRange: React.FC<FilterCategoryProps> = ({ getRange }) => {
  return (
    <Select
      onValueChange={(value) => {
        getRange((prev: iFilter) => ({
          ...prev,
          range: value,
        }));
      }}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder={FilterList[2].filterName} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{FilterList[2].filterLabel}</SelectLabel>
          {FilterList[2].filterItems.map((item) => {
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

export default FilterByRange;

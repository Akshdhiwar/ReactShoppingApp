import React, { useEffect, useState } from "react";
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
  filter: iFilter;
}

const FilterByRange: React.FC<FilterCategoryProps> = ({ getRange, filter }) => {
  const [selectedRange, setSelectedRange] = useState<string | null>(
    filter.range
  );

  useEffect(() => {
    // Update the selected range when the filter prop changes
    setSelectedRange(filter.range);
  }, [filter.range]);

  const handleRangeChange = (value: string) => {
    // Update the selected range and call the getRange function
    setSelectedRange(value);
    getRange((prev: iFilter) => ({
      ...prev,
      range: value,
    }));
  };

  return (
    <Select onValueChange={handleRangeChange}>
      <SelectTrigger className="w-full">
        <SelectValue
          placeholder={
            selectedRange != null && selectedRange !== ""
              ? selectedRange
              : "Range"
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{FilterList[2].filterLabel}</SelectLabel>
          {FilterList[2].filterItems.map((item) => (
            <SelectItem value={String(item.value)} key={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterByRange;

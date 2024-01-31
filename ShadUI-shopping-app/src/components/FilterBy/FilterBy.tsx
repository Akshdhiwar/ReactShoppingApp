import { CheckIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../ui/command";
import iFilter from "../../Interfaces/Filter";

interface FilterByProps {
  updateFilter: (data: any) => void;
  filter: string;
  FilterData: any;
}

const FilterBy: React.FC<FilterByProps> = ({
  filter,
  updateFilter,
  FilterData,
}) => {
  const Filtername = FilterData.filterItems.filter(
    (option: any) => option.value === filter
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-8 border-dashed relative"
        >
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          {FilterData.filterName}
          {filter !== "" && (
              <div className="lg:flex hidden">
                <Separator orientation="vertical" className="mx-2 h-4" />
                <div className="space-x-1 flex">
                  <Badge
                    variant="secondary"
                    className="rounded-sm px-1 font-normal flex text-nowrap"
                  >
                    {Filtername.length > 0 ? Filtername[0].label : ""}
                  </Badge>
                </div>
              </div>
            ) && (
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal lg:hidden absolute -right-2 -top-2 text-[10px]"
              >
                1
              </Badge>
            )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder={FilterData.filterName} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {FilterData.filterItems.map((option: any) => {
                const isSelected = filter == option.value;
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => {
                      if (isSelected) {
                        updateFilter((prev: iFilter) => ({
                          ...prev,
                          [FilterData.filterFormName]: "",
                        }));
                      } else {
                        updateFilter((prev: iFilter) => ({
                          ...prev,
                          [FilterData.filterFormName]: option.value,
                        }));
                      }
                    }}
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible"
                      )}
                    >
                      <CheckIcon className={cn("h-4 w-4")} />
                    </div>
                    <span>{option.label}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
            {filter !== "" && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() =>
                      updateFilter((prev: iFilter) => ({
                        ...prev,
                        [FilterData.filterFormName]: "",
                      }))
                    }
                    className="justify-center text-center"
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default FilterBy;

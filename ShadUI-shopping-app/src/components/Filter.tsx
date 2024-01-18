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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormField } from "./ui/form";

interface FilterProps {
  products: iProduct[] | null;
}

const FilterSchema = z.object({
  category: z.string(),
  sort: z.string(),
  range: z.string(),
  brand: z.array(z.string()),
});

const Filter: React.FC<FilterProps> = () => {
  const filterForm = useForm<z.infer<typeof FilterSchema>>({
    resolver: zodResolver(FilterSchema),
  });

  useEffect(() => {
    // Run the onSubmit function whenever form values change
    onSubmit(filterForm.getValues());
  }, [filterForm.watch()]); // Watch for changes in form values

  function onSubmit(formData: Record<string, any>) {
    // Your form submission logic goes here
    console.log("Form values:", formData);
  }

  return (
    <Form {...filterForm}>
      <div className="flex items-center justify-between pb-2">Filter</div>
      <form
        onSubmit={filterForm.handleSubmit(onSubmit)}
        className="grid lg:grid-cols-4 gap-2 grid-cols-2"
      >
        <FormField
          key={FilterList[0].filterName}
          control={filterForm.control}
          name="category"
          render={({ field }) => (
            <Select
              onValueChange={(value) => filterForm.setValue("category", value)}
              defaultValue={field.value}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={FilterList[0].filterName} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{FilterList[0].filterLabel}</SelectLabel>
                  {FilterList[0].filterItems.map((item) => {
                    return (
                      <SelectItem value={item.value} key={item.value}>
                        {item.label}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        ></FormField>
        <FormField
          key={FilterList[1].filterName}
          control={filterForm.control}
          name="sort"
          render={({ field }) => (
            <Select
              onValueChange={(value) => filterForm.setValue("sort", value)}
              defaultValue={field.value}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={FilterList[1].filterName} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{FilterList[1].filterLabel}</SelectLabel>
                  {FilterList[1].filterItems.map((item) => {
                    return (
                      <SelectItem value={item.value} key={item.value}>
                        {item.label}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        ></FormField>
        <FormField
          key={FilterList[2].filterName}
          control={filterForm.control}
          name="range"
          render={({ field }) => (
            <Select
              onValueChange={(value) => filterForm.setValue("range", value)}
              defaultValue={field.value}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={FilterList[2].filterName} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{FilterList[2].filterLabel}</SelectLabel>
                  {FilterList[2].filterItems.map((item) => {
                    return (
                      <SelectItem value={item.value} key={item.value}>
                        {item.label}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        ></FormField>
        <FormField
          control={filterForm.control}
          name="brand"
          render={({ field }) => (
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Brand</SelectLabel>
                  {FilterList[3].filterItems.map((ele) => {
                    return (
                      <div
                        className="flex items-center gap-2 p-2 py-1"
                        key={ele.label}
                      >
                        <Checkbox
                          id={ele.label}
                          checked={
                            Array.isArray(field.value) &&
                            field.value.includes(ele.value)
                          }
                          onCheckedChange={(checked) => {
                            const updatedValue = Array.isArray(field.value)
                              ? checked
                                ? [...field.value, ele.value]
                                : field.value.filter(
                                    (value) => value !== ele.value
                                  )
                              : checked
                              ? [ele.value]
                              : [];

                            field.onChange(updatedValue);
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
          )}
        ></FormField>
      </form>
    </Form>
  );
};

export default Filter;

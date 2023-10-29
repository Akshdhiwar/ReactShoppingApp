import { FC } from "react";

interface CategoryProps {
  data: Array<categoryInfoType>;
}
type categoryInfoType = {
  imageLink: string;
  style?: string;
};

const Category: FC<CategoryProps> = ({ data }): JSX.Element => {
  return (
    <div className="w-full lg:h-screen grid lg:grid-cols-4 lg:grid-rows-2 gap-4 my-2">
      {data.map((ele, index) => {
        return (
          <div className={ele.style!}>
            <img
              key={index}
              src={ele.imageLink}
              alt=""
              className="h-full w-full object-cover rounded-2xl hover:shadow-2xl cursor-pointer"
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Category;

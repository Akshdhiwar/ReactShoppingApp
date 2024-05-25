import { ChevronRightIcon } from "@radix-ui/react-icons";
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumProps {
  productTitle: string | undefined;
}

const Breadcrum: React.FC<BreadcrumProps> = ({ productTitle }) => {
  const location = useLocation();
  let breadcrums = location.pathname.split("/").filter(Boolean);
  breadcrums = breadcrums.filter((ele) => isNaN(Number(ele)));
  return (
    <div className="flex items-center gap-2 ">
      <Link className="hover:underline" to="/dashboard">
        Home
      </Link>
      {breadcrums.map((link) => {
        return (
          <div className="sm:flex items-center gap-2 hidden">
            <ChevronRightIcon key={link}></ChevronRightIcon>
            <p className="hover:underline capitalize truncate max-w-[100px]" key={link}>
              {link}
            </p>
          </div>
        );
      })}
      {productTitle && (
        <div className="flex items-center gap-1">
          <ChevronRightIcon></ChevronRightIcon>
          <p className="hover:underline capitalize truncate sm:max-w-full max-w-[280px]">
            {productTitle}
          </p>
        </div>
      )}
    </div>
  );
};

export default Breadcrum;

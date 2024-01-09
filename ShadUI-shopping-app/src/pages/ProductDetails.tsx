import { ArrowLeft, ChevronRightSquareIcon, Link } from "lucide-react";
import { Button } from "../components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";

const ProductDetails = () => {
  return (
    <div className="content-grid py-2">
      <div className="flex items-center">
        <div>
          <Button variant={"ghost"} className="flex gap-1">
            <ArrowLeft height={20} width={20}></ArrowLeft> Back
          </Button>
        </div>

        {/* Breadcrum part */}

        <div className="flex items-center">
          <a href="" className="hover:underline">
            Home
          </a>
          <ChevronRightIcon></ChevronRightIcon>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

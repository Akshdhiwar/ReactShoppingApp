import React from "react";
import iProduct from "../../Interfaces/Products";

interface DetailsProps {
  product: iProduct | null;
}

const Details: React.FC<DetailsProps> = ({ product }) => {
  return (
    <div>
      <p className="text-4xl font-bold tracking-tight">{product?.title}</p>
      <p className="text-lg text-muted-foreground">{product?.description}</p>
      <div className="flex gap-1">
        <p className="text-4xl font-bold tracking-tight">${product?.price}</p>
        <p className="font-thin line-through">{Number(product?.price) + 5}</p>
      </div>
    </div>
  );
};

export default Details;

import { useParams } from "react-router-dom";
import iProduct from "../Interfaces/Products";
import { useState, useEffect } from "react";
import Loader from "../components/ui/Loader";
import ProductImage from "../components/ProductDetails/ProductImage";
import Breadcrum from "../components/ProductDetails/Breadcrum";
import Details from "../components/ProductDetails/Details";
import axiosHttp from "../axiosHandler/axiosHandler";

export interface ProductDetailsProps {
  product: iProduct | undefined;
}

const ProductDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<iProduct | undefined>();

  useEffect(() => {
    setLoading(true);
      axiosHttp.get(`products/${id}`).then((data) => {
        setProduct(data.data);
        setLoading(false);
      })
    } ,[]);

  return (
    <div className="content-grid py-2 min-h-full ">
      <div className="flex flex-col gap-1 flex-1 h-full">
        {/* Breadcrumb part */}
        <Breadcrum productTitle={product?.Title} />
        {/* Product details part */}
        {loading ? (
          <Loader></Loader>
        ) : (
          <div className="flex-1 flex h-[80vh] lg:flex-row flex-col gap-2">
            {/*image section */}
            <div className="lg:w-1/2">
              <ProductImage productImage={product?.Image} />
            </div>
            {/* details section */}
            <div className="lg:w-1/2">
              <Details product={product} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;

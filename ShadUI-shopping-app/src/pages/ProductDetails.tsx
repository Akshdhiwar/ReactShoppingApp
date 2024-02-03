import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Link, useLocation, useParams } from "react-router-dom";
import iProduct from "../Interfaces/Products";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../components/ui/Loader";
import ProductImage from "../components/ProductDetails/ProductImage";

export interface ProductDetailsProps {
  product: iProduct;
}

const ProductDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  let breadcrums = location.pathname.split("/").filter(Boolean);
  breadcrums = breadcrums.filter((ele) => isNaN(Number(ele)));
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<iProduct | null>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setLoading(false);
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="content-grid py-2 min-h-full ">
      <div className="flex flex-col gap-1 flex-1 h-full">
        {/* Breadcrumb part */}
        <div className="flex items-center gap-2">
          <Link className="hover:underline" to="/dashboard">
            Home
          </Link>
          {breadcrums.map((link) => {
            return (
              <div className="flex items-center gap-2">
                <ChevronRightIcon key={link}></ChevronRightIcon>
                <p className="hover:underline capitalize" key={link}>
                  {link}
                </p>
              </div>
            );
          })}
          {product && (
            <div className="flex items-center gap-1">
              <ChevronRightIcon></ChevronRightIcon>
              <p className="hover:underline capitalize truncate sm:max-w-full max-w-[180px]">
                {product.title}
              </p>
            </div>
          )}
        </div>
        {/* Product details part */}
        {loading ? (
          <Loader></Loader>
        ) : (
          <div className="flex-1 flex h-[80vh] lg:flex-row flex-col">
            {/*image section */}
            <div className="lg:w-1/2">
              <ProductImage />
            </div>

            {/* details section */}
            <div className="lg:w-1/2"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;

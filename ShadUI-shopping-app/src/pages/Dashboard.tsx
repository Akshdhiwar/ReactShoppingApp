import Carousal from "../components/Carousal";
import Products from "../components/Products";
import Category from "../components/Category";
import { useEffect, useState } from "react";
import axios from "axios";
import iProduct from "../Interfaces/Products";
import Review from "../components/Review";
import { baseURL } from "../Constants/api";

const Dashboard = () => {
  const [data, setData] = useState<iProduct[]>([]);
  const slideImages = [
    {
      src: `//www.layers.shop/cdn/shop/files/8_eff7d432-be32-4b96-aa9e-95e881cb6cb4.png?v=1681994691`,
      mobile:
        "//www.layers.shop/cdn/shop/files/Mobile_banner_9d19fcd2-2263-449f-8bc2-f96ae04fbc88.png?v=1682934045",
    },
    {
      src: "//www.layers.shop/cdn/shop/files/collection_banners_1_1.jpg?v=1693591120",
      mobile:
        "//www.layers.shop/cdn/shop/files/collection_banners_1_1.jpg?v=1693591120",
    },
    {
      src: "//www.layers.shop/cdn/shop/files/collection_banners_3_1.jpg?v=1693573648",
      mobile:
        "//www.layers.shop/cdn/shop/files/collection_banners_Mobile_3_1.jpg?v=1693573679",
    },
  ];
  const categoryList = [
    {
      imageLink:
        "https://img.freepik.com/free-vector/abstract-monochrome-distorted-mesh-plane-dark-background-futuristic-style-card-elegant-background-business-presentations-grayscale-corrupted-point-plane-chaos-aesthetics_1217-1798.jpg?w=826&t=st=1698574196~exp=1698574796~hmac=96384788d9de195987ac51534e92cfa0c389c6439628d6bed93c27c42c086445",
      style: "lg:col-span-2 lg:row-span-2 hover:scale-[101%] transition-all",
    },
    {
      imageLink:
        "https://img.freepik.com/free-vector/abstract-monochrome-distorted-mesh-plane-dark-background-futuristic-style-card-elegant-background-business-presentations-grayscale-corrupted-point-plane-chaos-aesthetics_1217-1798.jpg?w=826&t=st=1698574196~exp=1698574796~hmac=96384788d9de195987ac51534e92cfa0c389c6439628d6bed93c27c42c086445",
      style: "hover:scale-[101%] transition-all",
    },
    {
      imageLink:
        "https://img.freepik.com/free-vector/abstract-monochrome-distorted-mesh-plane-dark-background-futuristic-style-card-elegant-background-business-presentations-grayscale-corrupted-point-plane-chaos-aesthetics_1217-1798.jpg?w=826&t=st=1698574196~exp=1698574796~hmac=96384788d9de195987ac51534e92cfa0c389c6439628d6bed93c27c42c086445",
      style: "hover:scale-[101%] transition-all",
    },
    {
      imageLink:
        "https://img.freepik.com/free-vector/abstract-monochrome-distorted-mesh-plane-dark-background-futuristic-style-card-elegant-background-business-presentations-grayscale-corrupted-point-plane-chaos-aesthetics_1217-1798.jpg?w=826&t=st=1698574196~exp=1698574796~hmac=96384788d9de195987ac51534e92cfa0c389c6439628d6bed93c27c42c086445",
      style: "lg:col-span-2  hover:scale-[101%] transition-all",
    },
  ];

  useEffect(() => {
    axios
      .get(`${baseURL}products/`)
      .then((data) => {
        const productsWithIsAdded = data.data.map((item: iProduct) => ({
          ...item,
          isAddedToCart: false,
          quantity: 1,
        }));
        setData(productsWithIsAdded);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="content-grid">
      <div className="lg:h-screen h-[70vh] fullwidth">
        <Carousal slideImages={slideImages}></Carousal>
      </div>
      <h1 className="font-bold text-4xl my-4">Products</h1>
      <Products products={data} />
      <h1 className="font-bold text-4xl my-4">Category</h1>
      <Category data={categoryList} />
      <h1 className="font-bold text-4xl my-4">Explore More</h1>
      <Products products={data} />
      <h1 className="font-bold text-4xl my-4">Reviews</h1>
      <Review />
    </div>
  );
};

export default Dashboard;

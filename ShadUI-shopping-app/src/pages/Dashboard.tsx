import Carousal from "../components/Carousal";
import Products from "../components/Products";
import Category from "../components/Category";
import { useEffect, useState } from "react";
import axios from "axios";
import iProduct from "../Interfaces/Products";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const slideImages = [
    "https://images.unsplash.com/photo-1697807650304-907257330a3e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1697537045318-3510d37ca3c6?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1697909622972-3212d9dde7b5?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1697432123723-9bcdfaab7878?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      .get("https://fakestoreapi.com/products?limit=8")
      .then((data) => {
        const productsWithIsAdded = data.data.map((item: iProduct) => ({
          ...item,
          isAddedToCart: false,
        }));
        setData(productsWithIsAdded);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className=" content-grid">
      <div className="lg:h-screen h-[70vh] fullwidth">
        <Carousal slideImages={slideImages}></Carousal>
      </div>

      <h1 className="font-bold text-4xl my-4">Products</h1>
      <Products products={data} />
      <h1 className="font-bold text-4xl my-4">Category</h1>
      <Category data={categoryList} />
      <h1 className="font-bold text-4xl my-4">Explore More</h1>
      <Products products={data} />
    </div>
  );
};

export default Dashboard;

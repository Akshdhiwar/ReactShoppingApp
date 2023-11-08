import Products from "../Shared/Products";
import Carousal from "./Carousal";
import Category from "../Shared/Category";
import Toolbar from "./Toolbar";
import { useEffect, useState } from "react";
import CheckoutBag from "./CheckoutBag";

const Dashboard = () => {
  const [right, setRight] = useState(0);
  const slideImages = [
    // "https://images.unsplash.com/photo-1697807650304-907257330a3e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "https://plus.unsplash.com/premium_photo-1697537045318-3510d37ca3c6?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "https://images.unsplash.com/photo-1697909622972-3212d9dde7b5?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1697432123723-9bcdfaab7878?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const categoryList = [
    {
      imageLink:
        "https://img.freepik.com/free-vector/abstract-monochrome-distorted-mesh-plane-dark-background-futuristic-style-card-elegant-background-business-presentations-grayscale-corrupted-point-plane-chaos-aesthetics_1217-1798.jpg?w=826&t=st=1698574196~exp=1698574796~hmac=96384788d9de195987ac51534e92cfa0c389c6439628d6bed93c27c42c086445",
      style: "lg:col-span-2 lg:row-span-2",
    },
    {
      imageLink:
        "https://img.freepik.com/free-vector/abstract-monochrome-distorted-mesh-plane-dark-background-futuristic-style-card-elegant-background-business-presentations-grayscale-corrupted-point-plane-chaos-aesthetics_1217-1798.jpg?w=826&t=st=1698574196~exp=1698574796~hmac=96384788d9de195987ac51534e92cfa0c389c6439628d6bed93c27c42c086445",
    },
    {
      imageLink:
        "https://img.freepik.com/free-vector/abstract-monochrome-distorted-mesh-plane-dark-background-futuristic-style-card-elegant-background-business-presentations-grayscale-corrupted-point-plane-chaos-aesthetics_1217-1798.jpg?w=826&t=st=1698574196~exp=1698574796~hmac=96384788d9de195987ac51534e92cfa0c389c6439628d6bed93c27c42c086445",
    },
    {
      imageLink:
        "https://img.freepik.com/free-vector/abstract-monochrome-distorted-mesh-plane-dark-background-futuristic-style-card-elegant-background-business-presentations-grayscale-corrupted-point-plane-chaos-aesthetics_1217-1798.jpg?w=826&t=st=1698574196~exp=1698574796~hmac=96384788d9de195987ac51534e92cfa0c389c6439628d6bed93c27c42c086445",
      style: "lg:col-span-2",
    },
  ];

  useEffect(() => {
    const updatePosition = () => {
      const right =
        window.innerWidth > 1536 ? (window.innerWidth - 1536) / 2 : 0;
      setRight(right);
    };
    window.addEventListener("resize", updatePosition);
    updatePosition();

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  });

  return (
    <div className="flex flex-col justify-center">
      <Toolbar />
      <div className="lg:h-screen h-[70vh]">
        <Carousal slideImages={slideImages}></Carousal>
      </div>

      <div className="flex flex-col w-full justify-center m-auto items-center max-w-screen-2xl px-3 xl:p-0">
        <Products />
        <Category data={categoryList} />
      </div>

      <div
        className="fixed bottom-0 m-4 border-white border-2 rounded-full"
        style={{ right: right }}
      >
        <CheckoutBag />
      </div>
    </div>
  );
};

export default Dashboard;

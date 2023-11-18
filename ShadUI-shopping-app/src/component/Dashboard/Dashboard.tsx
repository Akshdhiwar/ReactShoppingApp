import Toolbar from "./Toolbar";
import { useEffect, useState } from "react";
import CheckoutBag from "./CheckoutBag";
import { Outlet } from "react-router";

const Dashboard = () => {
  const [right, setRight] = useState(0);

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
      <Outlet></Outlet>
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

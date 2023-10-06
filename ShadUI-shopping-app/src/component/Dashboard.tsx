import Toolbar from "./Toolbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Toolbar></Toolbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;

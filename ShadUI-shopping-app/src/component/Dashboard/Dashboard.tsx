import Carousal from "./Carousal";
import Toolbar from "./Toolbar";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center relative">
      <Toolbar />
      <Carousal></Carousal>
    </div>
  );
};

export default Dashboard;

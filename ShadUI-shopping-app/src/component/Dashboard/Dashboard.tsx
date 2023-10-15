import Carousal from "./Carousal";
import Toolbar from "./Toolbar";

const Dashboard = () => {
  return (
    <div className="flex justify-center relative">
      <div className="flex flex-col max-w-screen-2xl flex-1 ">
        <Toolbar />
        <Carousal></Carousal>
      </div>
    </div>
  );
};

export default Dashboard;

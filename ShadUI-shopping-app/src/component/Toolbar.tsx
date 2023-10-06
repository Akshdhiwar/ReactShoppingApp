import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import CreateAccount from "./CreateAccount";
import Login from "./Login";

const Toolbar = () => {
  return (
    <div className="p-2 flex items-center justify-between box-border">
      <Link to="/">
        <div className="logo font-extrabold">SHOPPING</div>
      </Link>
      <div>
        <Link to="/pro">
          <Button variant={"ghost"}>Products</Button>
        </Link>
        <Button variant={"ghost"}>Offers</Button>
        <Button variant={"ghost"}>More</Button>
      </div>
      <div className="flex gap-2">
        <CreateAccount></CreateAccount>
        <Login></Login>
      </div>
    </div>
  );
};

export default Toolbar;

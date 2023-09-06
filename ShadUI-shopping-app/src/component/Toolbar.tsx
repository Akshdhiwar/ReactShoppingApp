import { Button } from "../components/ui/button";
import CreateAccount from "./CreateAccount";
import Login from "./Login";

const Toolbar = () => {
  return (
    <div className="p-2 flex items-center justify-between box-border transi">
      <div className="logo font-extrabold">SHOPPING</div>
      <div>
        <Button variant={"ghost"}>Products</Button>
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

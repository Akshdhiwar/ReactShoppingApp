import "./App.css";
import Dashboard from "./component/Dashboard/Dashboard";
import Login from "./component/Login";
import { Routes, Route } from "react-router-dom";
import Search from "./component/Shared/Search";

function App() {
  return (
    <>
      {/* <Login></Login> */}
      <Routes>
        <Route path="/login" Component={Login}></Route>
        <Route index Component={Dashboard}></Route>
        <Route path="/search" Component={Search}></Route>
      </Routes>
    </>
  );
}

export default App;

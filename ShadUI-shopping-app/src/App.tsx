import "./App.css";
import Dashboard from "./component/Dashboard/Dashboard";
import Login from "./component/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Login></Login> */}
      <Routes>
        <Route path="/" Component={Login}></Route>
        <Route path="/dashboard" Component={Dashboard}></Route>
      </Routes>
    </>
  );
}

export default App;

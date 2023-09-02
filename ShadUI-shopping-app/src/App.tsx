import "./App.css";
import Dashboard from "./component/Dashboard";

function App() {
  return (
    <>
      <div className="main flex justify-center">
        <div className="max-w-[1400px] w-full">
          <Dashboard/>
        </div>
      </div>
    </>
  );
}

export default App;

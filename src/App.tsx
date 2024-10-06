import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";

function App() {
  const [sideBarToggler, setSideBarToggler] = useState(false);

  return (
    <div className=" flex font-[IranYekan]" dir="rtl">
      <SideBar
        sideBarToggler={sideBarToggler}
        setSideBarToggler={setSideBarToggler}
      />
      <Dashboard
        setSideBarToggler={setSideBarToggler}
        sideBarToggler={sideBarToggler}
      />
    </div>
  );
}

export default App;

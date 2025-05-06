import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Mainlayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[330px]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Mainlayout;

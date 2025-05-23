import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../sheard/Footer";

const Mainlayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[330px]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Mainlayout;

import { Outlet } from "react-router-dom";
import Navbar from "../pages/sharePage/Navbar";
import Footer from "../pages/sharePage/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Main;

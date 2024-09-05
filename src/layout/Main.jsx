import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import TopNavbar from "../pages/Shared/TopNavbar";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <div className="shadow-md">
        <TopNavbar />
        <hr />
        <Navbar />
      </div>
      <main className="flex-1 w-full mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Main;

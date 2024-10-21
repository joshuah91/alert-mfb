import { Outlet } from "react-router-dom";
import Topbar from "./topbar";
import Sidebar from "./sidebar";
const ProtectedRoutes = () => {
  return (
    <div className="relative w-full h-screen bg-[#fff]">
      <div className="w-[20%] fixed left-0 h-full z-50">
        <Sidebar />
      </div>
      <div className="w-[80%] ml-auto relative">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
};

export default ProtectedRoutes;

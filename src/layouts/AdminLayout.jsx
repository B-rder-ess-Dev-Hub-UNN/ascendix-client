import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/SiderBar";
import AdminNav from "../components/admin/AdminNav";

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 text-white bg-[#1D1751]">
        <AdminNav />
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

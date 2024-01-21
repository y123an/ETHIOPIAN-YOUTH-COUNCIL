import { Navigate, Outlet } from "react-router-dom";

const AdminPrivateRoutes = () => {
  const auth = localStorage.getItem("admin-token");
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminPrivateRoutes;

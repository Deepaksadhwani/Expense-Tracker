import Login from "./pages/Login";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./layouts/Navbar";
import { Toaster } from "react-hot-toast";

const App = () => {
  const tokenUserSlice = useSelector((store) => store.user.token);

  return !tokenUserSlice ? (
    <Navigate to="/login" />
  ) : (
    <div>
      <Toaster />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NavLogo from "/src/assets/navlogo.jpeg";
import { useDispatch } from "react-redux";
import { removeToken, removeUserData } from "../store/userSlice";
import Shimmer from "../components/Shimmer";

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activeClass = "text-yellow-400";

  const logoutHandler = () => {
    setLoading(true)
    const timer = setTimeout(() => { 
      localStorage.clear();
      dispatch(removeUserData());
      dispatch(removeToken());
      navigate("/"); 
      setLoading(false);
    }, 1000);
    
   
  };

  return loading ? <Shimmer/> : (
    <div className="group flex items-center justify-between bg-[#00215E] px-10 py-2">
      <img
        src={NavLogo}
        alt=""
        className="w-28 rounded-full transition-all duration-100 hover:animate-spin "
      />
      <div>
        <h1 className="text-[0px] font-semibold tracking-tight text-yellow-500 transition-all duration-1000 group-hover:text-3xl ">
          Welcome Expense Tracker
        </h1>
      </div>
      <div className="flex  items-center space-x-3 text-xl font-semibold text-white ">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClass : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeClass : undefined)}
          to="/ProfilePage"
        >
          Profile
        </NavLink>
        <button className="btn" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;

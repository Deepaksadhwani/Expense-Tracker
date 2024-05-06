import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NavLogo from "/src/assets/navlogo.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { removeToken, removeUserData } from "../store/userSlice";
import Shimmer from "../components/Shimmer";

import DropDownMenu from "../components/DropDownMenu";
const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const activeClass = "text-yellow-400";

  const userData = useSelector((store) => store.user.userData);
  const { photoUrl, displayName } = userData || {};

  const image = photoUrl || NavLogo;

  const logoutHandler = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      localStorage.clear();
      dispatch(removeUserData());
      dispatch(removeToken());
      navigate("/");
      setLoading(false);
    }, 1000);
  };

  return loading ? (
    <Shimmer />
  ) : (
    <div  className="group relative flex items-center justify-between bg-[#00215E] px-10 py-2">
      <img
        src={NavLogo}
        alt=""
        className="w-20  rounded-full shadow-md shadow-cyan-200 transition-all duration-100"
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
       
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex cursor-pointer  select-none items-center   space-x-3 rounded-full  bg-gray-500 bg-opacity-50 p-1 px-3 font-semibold text-white  transition-all duration-200 hover:scale-[1.04]"
        >
          <img src={image} className="w-14  rounded-full" />
          <p className="">{displayName}</p>
          <span className="text-yellow-500">⮟</span>
        </div>
        {isOpen && <DropDownMenu onLogOutHandler={logoutHandler}   navigate={navigate}/>}
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NavLogo from "/src/assets/navlogo.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { removeToken, removeUserData } from "../store/userSlice";
import Shimmer from "../components/Shimmer";
import { BiLogOut } from "react-icons/bi";
import { MdVerified } from "react-icons/md";
import useVerifyUserEmail from "../hooks/useVerifyUserEmail";

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

  const verifyEmailHandler = () => {
    const verifyUserEmail = useVerifyUserEmail();
    verifyUserEmail();
      alert("Complete the verification process, Check your Email.")
  };

  return loading ? (
    <Shimmer />
  ) : (
    <div className="group relative flex items-center justify-between bg-[#00215E] px-10 py-2">
      <img
        src={NavLogo}
        alt=""
        className="w-20 rounded-full shadow-md shadow-cyan-200 transition-all duration-100"
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
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex cursor-pointer  select-none items-center   space-x-3 rounded-full  bg-gray-500 bg-opacity-50 p-1 px-3 font-semibold text-white  transition-all duration-200 hover:scale-[1.04]"
        >
          <img src={image} alt="" className="w-10 rounded-md" />
          <p className="">{displayName}</p>
          <span className="text-yellow-500">⮟</span>
        </div>
        {isOpen && (
          <div className="absolute -bottom-16 right-8 flex  w-[200px] flex-col rounded-lg   border-2 border-black  bg-gray-100 p-2  font-semibold text-gray-600  ">
            <div className="absolute -top-4  right-8 rotate-180 text-gray-100">
              ⏷
            </div>
            <button
              className="duration flex items-center justify-center gap-x-2 border-b  border-black py-1  transition-all hover:scale-[1.05]"
              onClick={logoutHandler}
            >
              <BiLogOut />
              Logout
            </button>
            <button onClick={verifyEmailHandler} className="duration flex items-center justify-center gap-x-2   py-1 transition-all hover:scale-[1.05]">
              <MdVerified />
              Verify Email
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

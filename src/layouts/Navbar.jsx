import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NavLogo from "/src/assets/navlogo.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { removeToken, removeUserData } from "../store/userSlice";
import Shimmer from "../components/Shimmer";
import DropDownMenu from "../components/DropDownMenu";
import { removeExpense } from "../store/expenseSlice";

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const expenseData = useSelector((store) => store.expense);
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
      dispatch(removeExpense());
      navigate("/");
      setLoading(false);
    }, 700);
  };

  const handleDownloadExpenseFile = () => {
    const expenseDataArray = Object.values(expenseData);

    const csvContent = [
      ["Description", "Amount", "Category", "Date"].join(","),
      ...expenseDataArray.map((item) =>
        [item.description, item.amount, item.category, item.date].join(","),
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "expense_data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return loading ? (
    <Shimmer />
  ) : (
    <div className="relative flex items-center justify-between bg-[#00215E] px-10 py-2">
      <div className="flex items-center space-x-4">
        <img
          src={NavLogo}
          alt=""
          className="w-20 rounded-full shadow-md shadow-cyan-200 transition-all duration-100"
        />
        <h1 className="text-4xl font-semibold italic tracking-tight text-yellow-500 transition-all duration-1000 ">
          Expense Tracker
        </h1>
      </div>
      {!loading && Object.values(expenseData).length > 0 && (
        <button
          className="rounded-lg bg-blue-500 p-2 font-bold text-white transition-all duration-300 hover:bg-blue-700"
          onClick={handleDownloadExpenseFile}
        >
          Download Expense File
        </button>
      )}
      <div className="flex items-center space-x-3 text-xl font-semibold text-white ">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClass : undefined)}
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
        <img
          src={image}
          className="m-1 h-14 w-16 rounded-lg border border-gray-700 object-cover"
        />
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="group/testing flex cursor-pointer select-none items-center space-x-3 rounded-md border-2 border-black bg-yellow-300 px-3 py-3 font-semibold text-[#00215E] transition-all duration-200 hover:scale-[1.04]"
        >
          <p className="">{displayName}</p>
          <span className=" duration-700 group-hover/testing:rotate-180">
            ⮟
          </span>
        </div>
        {isOpen && (
          <DropDownMenu
            onLogOutHandler={logoutHandler}
            ontoggleDropMenu={setIsOpen}
            navigate={navigate}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;

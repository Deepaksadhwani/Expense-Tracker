import React, { useState } from "react";
import Login from "./pages/Login";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./layouts/Navbar";

const App = () => {
  const tokenUserSlice = useSelector((store) => store.user.token);

  return !tokenUserSlice ? (
    <Login />
  ) : (
    <div>
      <Navbar/>
      <Outlet />
    </div>
  );
};

export default App;

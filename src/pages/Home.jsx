import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const moveToUserPageHandler = () => {
    navigate("/ProfilePage")
  };
  return (
    <div className="flex justify-between items-center bg-cyan-100 px-10">
      <h1>Welcome to expense tracker</h1>
        <div className="flex items-center space-x-2 bg-slate-400 rounded-full ">
          <p className="rounded-full p-1">Your profile is incomplete</p>
          <button onClick={moveToUserPageHandler} className="bg-white p-2 rounded-full ">complete Now</button>
        </div>
    </div>
  );
};

export default Home;

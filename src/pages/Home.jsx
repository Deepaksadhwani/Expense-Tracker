import { useNavigate } from "react-router-dom";
import useGetUserData from "../hooks/useGetUserData";
import { useDispatch } from "react-redux";
import Shimmer from "../components/Shimmer";
import { useEffect, useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userToken = localStorage.getItem("token");

  const moveToUserPageHandler = () => {
    navigate("/ProfilePage");
  };

  useEffect(() => {
    useGetUserData(dispatch, userToken);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return loading ? (
    <Shimmer />
  ) : (
    <div className="flex items-center justify-between bg-cyan-100 px-10">
      <h1>Welcome to expense tracker</h1>
      <div className="flex items-center space-x-2 rounded-full bg-slate-400 ">
        <p className="select-none rounded-full p-1">
          Your profile is incomplete
        </p>
        <button
          onClick={moveToUserPageHandler}
          className="rounded-full bg-white p-2 "
        >
          complete Now
        </button>
      </div>
    </div>
  );
};

export default Home;

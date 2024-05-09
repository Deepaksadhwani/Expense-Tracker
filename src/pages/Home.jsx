import { useNavigate } from "react-router-dom";
import useGetUserData from "../hooks/useGetUserData";
import { useDispatch } from "react-redux";
import Shimmer from "../components/Shimmer";
import { useEffect, useState } from "react";
import ExpenseForm from "../layouts/Home/ExpenseForm";
import { setUserData } from "../store/userSlice";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const userToken = localStorage.getItem("token");
  const  parseData = JSON.parse(localStorage.getItem("userData"));

  dispatch(setUserData(parseData));
  const moveToUserPageHandler = () => {
    navigate("/ProfilePage");
  };

  useEffect(() => {
    useGetUserData(dispatch, userToken);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    if (parseData){
      dispatch(setUserData(parseData))
    }
    return () => clearTimeout(timer);
  }, []);
  return loading ? (
    <Shimmer />
  ) : (
    <div>
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
      <div>
        <ExpenseForm/>
      </div>
    </div>
  );
};

export default Home;

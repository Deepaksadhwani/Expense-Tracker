import { useNavigate } from "react-router-dom";
import useGetUserData from "../hooks/useGetUserData";
import { useDispatch, useSelector } from "react-redux";
import Shimmer from "../components/Shimmer";
import { useEffect, useState } from "react";
import ExpenseForm from "../layouts/Home/ExpenseForm";
import { setUserData } from "../store/userSlice";
import useGetExpenseData from "../hooks/useGetExpenseData";
import Card from "../components/Card";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ExpenseArray = useState([]);  
  const userToken = localStorage.getItem("token");
  const parseData = JSON.parse(localStorage.getItem("userData"));
  const [expenseData, setExpenseData] = useState("");
  const updatedProfileStatus = parseData?.displayName;
  const moveToUserPageHandler = () => {
    navigate("/ProfilePage");
  };

  

  useEffect(() => {
    useGetExpenseData(dispatch, setExpenseData);
    useGetUserData(dispatch, userToken);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    if (parseData) {
      dispatch(setUserData(parseData));
    }
    return () => clearTimeout(timer);
  }, []);
  return loading ? (
    <Shimmer />
  ) : (
    <div className="h-screen">
      {!updatedProfileStatus ? (
        <div className="flex items-center justify-between bg-yellow-300 px-10">
          <h1 className="text-gray-700 text-lg font-semibold">Welcome to expense tracker</h1>
          <div className="flex items-center space-x-2 rounded-full bg-slate-400 ">
            <p className="select-none rounded-full p-1">
              Your profile is incomplete
            </p>
            <button
              onClick={moveToUserPageHandler}
              className=" border-2 border-black  rounded-full hover:scale-105 transition-all duration-300 bg-rose-400 text-white font-semibold p-2 "
            >
              complete Now
            </button>
          </div>
        </div>
      ) : null}
      <div>
        <ExpenseForm onSetExpenseData={setExpenseData} />
      </div>
      <div className="flex w-full flex-wrap px-10 pb-7 ">
        {expenseData &&
          Object.keys(expenseData).map((key) => (
            <Card
              onSetExpenseData={setExpenseData}
              key={key}
              id={key}
              amount={expenseData[key].amount}
              date={expenseData[key].date}
              category={expenseData[key].category}
              description={expenseData[key].description}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;

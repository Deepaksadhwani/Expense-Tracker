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
  const email = useSelector((store) => store.user.userData?.email);
  const userToken = localStorage.getItem("token");
  const parseData = JSON.parse(localStorage.getItem("userData"));
  const [expenseData, setExpenseData] = useState("");
  const updatedProfileStatus = parseData?.displayName;
  
  console.log(email);
  const moveToUserPageHandler = () => {
    navigate("/ProfilePage");
  };

  useEffect(() => {
    useGetExpenseData(dispatch, setExpenseData, email);
    useGetUserData(dispatch, userToken);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    if (parseData) {
      dispatch(setUserData(parseData));
    }
    return () => clearTimeout(timer);
  }, [email]);
  return loading ? (
    <Shimmer />
  ) : (
    <div className="h-screen">
      {!updatedProfileStatus ? (
        <div className="flex items-center justify-between bg-yellow-300 px-10">
          <h1 className="text-lg font-semibold text-gray-700">
            Welcome to expense tracker
          </h1>
          <div className="flex items-center space-x-2 rounded-full bg-slate-400 ">
            <p className="select-none rounded-full p-1">
              Your profile is incomplete
            </p>
            <button
              onClick={moveToUserPageHandler}
              className=" rounded-full border-2  border-black bg-rose-400 p-2 font-semibold text-white transition-all duration-300 hover:scale-105 "
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

import { useNavigate } from "react-router-dom";
import useGetUserData from "../hooks/useGetUserData";
import { useDispatch } from "react-redux";
import Shimmer from "../components/Shimmer";
import { useEffect, useState } from "react";
import ExpenseForm from "../layouts/Home/ExpenseForm";
import { setUserData } from "../store/userSlice";
import ExpenseCards from "../layouts/Home/ExpenseCards";
import IncomeForm from "../layouts/Home/IncomeFrom";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [incomeModalFormVisible, setIncomeModalFormVisible] = useState(false);
  const [expenseModalFormVisible, setExpenseModalFormVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userToken = localStorage.getItem("token");
  const parseData = JSON.parse(localStorage.getItem("userData"));
  const updatedProfileStatus = parseData?.displayName;
  const moveToUserPageHandler = () => {
    navigate("/ProfilePage");
  };

  useEffect(() => {
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
    <div className="h-screen bg-gray-50">
      {!updatedProfileStatus ? (
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
      ) : null}
      <div>
        <ExpenseCards onToggleIncomeModal={setIncomeModalFormVisible} onToggleExpenseModal={setExpenseModalFormVisible} />
      </div>
      <div>
        {incomeModalFormVisible && (
          <IncomeForm onToggleIncomeModal={setIncomeModalFormVisible} />
        )}
        {expenseModalFormVisible && (
          <ExpenseForm onToggleExpenseModal={setExpenseModalFormVisible} />
        )}
      </div>
    </div>
  );
};

export default Home;

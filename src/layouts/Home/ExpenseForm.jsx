import React, { useEffect, useRef, useState } from "react";
import usePostExpenseData from "../../hooks/usePostExpenseData";
import useGetExpenseData from "../../hooks/useGetExpenseData";
import Shimmer from "../../components/Shimmer";
import { useDispatch, useSelector } from "react-redux";
const ExpenseForm = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [expenseData, setExpenseData] = useState([]);
  const amount = useRef("");
  const description = useRef("");
  const category = useRef("");
  const expenseDataFromSlice = useSelector((store) => store.expense);
  if (!expenseDataFromSlice) return;
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      amount: amount.current.value,
      description: description.current.value,
      category: category.current.value,
    });

    console.log(data);
    usePostExpenseData(data, setLoading);
    console.log(expenseData);
  };
  console.log(expenseData)

  useEffect(() => {
    useGetExpenseData(dispatch);
    setExpenseData(expenseDataFromSlice)
  }, []);
  return loading ? (
    <Shimmer />
  ) : (
    <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-center text-3xl font-semibold text-gray-800">
        Enter Expense
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap items-center justify-center"
      >
        <div className="mb-4 mr-4">
          <label className="mb-2 block text-lg font-bold text-gray-700">
            Money Spent:
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border border-gray-400 px-3 py-2 leading-tight text-gray-700 focus:border-indigo-500 focus:outline-none"
            ref={amount}
          />
        </div>
        <div className="mb-4 mr-4">
          <label className="mb-2 block text-lg font-bold text-gray-700">
            Description:
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border border-gray-400 px-3 py-2 leading-tight text-gray-700 focus:border-indigo-500 focus:outline-none"
            ref={description}
          />
        </div>
        <div className="mb-6 mr-4">
          <label className="mb-2 block text-lg font-bold text-gray-700">
            Category:
          </label>
          <select
            className="focus:shadow-outline w-full appearance-none rounded border border-gray-400 px-3 py-2 leading-tight text-gray-700 focus:border-indigo-500 focus:outline-none"
            ref={category}
          >
            <option value="Food">Food</option>
            <option value="Petrol">Petrol</option>
            <option value="Salary">Salary</option>
          </select>
        </div>
        <div className="mt-2">
          <button
            className="focus:shadow-outline rounded bg-indigo-500 px-4 py-2 font-bold text-white hover:bg-indigo-700 focus:outline-none"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;

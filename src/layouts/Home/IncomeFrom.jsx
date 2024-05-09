import React, { useEffect, useRef, useState } from "react";
import usePostExpenseData from "../../hooks/usePostExpenseData";
import useGetExpenseData from "../../hooks/useGetExpenseData";
import Shimmer from "../../components/Shimmer";
import { useDispatch, useSelector } from "react-redux";
const IncomeForm = ({ onToggleIncomeModal }) => {
    
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [expenseData, setExpenseData] = useState([]);
  const amount = useRef("");
  const description = useRef("");
  const category = useRef("");
  const date = useRef("");
  const expenseDataFromSlice = useSelector((store) => store.expense);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      amount: amount.current.value,
      description: description.current.value,
      category: category.current.value,
      date: date.current.value,
    });

    console.log(data);
    usePostExpenseData(data, setLoading);
    onToggleIncomeModal(false);
  };
  console.log(expenseData);

  useEffect(() => {
    useGetExpenseData(dispatch);
    setExpenseData(expenseDataFromSlice);
  }, []);
  return loading ? (
    <Shimmer />
  ) : (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative w-full max-w-lg rounded-lg bg-white p-8 shadow-lg">
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={() => onToggleIncomeModal(false)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="mb-6 text-center   text-3xl font-semibold tracking-tight text-blue-900">
          Enter Income
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="mb-4 w-full">
            <label className="mb-2 block text-lg font-bold text-gray-700">
              Money Spent:
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border border-gray-400 px-3 py-2 leading-tight text-gray-700 focus:border-indigo-500 focus:outline-none"
              ref={amount}
            />
          </div>
          <div className="mb-4 w-full">
            <label className="mb-2 block text-lg font-bold text-gray-700">
              Description:
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border border-gray-400 px-3 py-2 leading-tight text-gray-700 focus:border-indigo-500 focus:outline-none"
              ref={description}
            />
          </div>
          <div className="mb-4 w-full">
            <label className="mb-2 block text-lg font-bold text-gray-700">
              Category:
            </label>
            <select
              className="focus:shadow-outline w-full appearance-none rounded border border-gray-400 px-3 py-2 leading-tight text-gray-700 focus:border-indigo-500 focus:outline-none"
              ref={category}
            >
              <option value="Salary">Salary</option>
              <option value="Freelance">Freelance</option>
              <option value="Investment">Investment</option>
            </select>
          </div>
          <div className="mb-6 w-full">
            <label className="mb-2 block text-lg font-bold text-gray-700">
              Date:
            </label>
            <input
              type="date"
              className="focus:shadow-outline w-full appearance-none rounded border border-gray-400 px-3 py-2 leading-tight text-gray-700 focus:border-indigo-500 focus:outline-none"
              ref={date}
            />
          </div>
          <div className="mt-2">
            <button
              className="focus:shadow-outline rounded bg-blue-500 px-6 py-3 font-bold text-white transition-colors duration-300 hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IncomeForm;

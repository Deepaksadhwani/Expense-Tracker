import React, { useRef, useState } from "react";
import usePostExpenseData from "../../hooks/usePostExpenseData";
import Shimmer from "../../components/Shimmer";
import { useDispatch } from "react-redux";
import useGetExpenseData from "../../hooks/useGetExpenseData";

const ExpenseForm = ({ onSetExpenseData }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const amount = useRef("");
  const description = useRef("");
  const category = useRef("");
  const date = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      amount: amount.current.value,
      description: description.current.value,
      category: category.current.value,
      date: date.current.value,
    });

    
    usePostExpenseData(data, setLoading);

    setTimeout(() => {
      useGetExpenseData(dispatch, onSetExpenseData);
    }, 500);
  };

  return loading ? (
    <Shimmer />
  ) : (
    <div className="mx-auto mb-5 mt-5  max-w-4xl rounded-lg bg-white ">
      <h2 className="mb-6 py-2 text-center text-3xl font-semibold text-gray-800">
        Enter Expense
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap items-center justify-center rounded-lg shadow-xl"
      >
        <div className="mb-4 mr-4">
          <label className="mb-2 block text-lg font-bold text-gray-700">
            Money Spent:
          </label>
          <input
            type="number"
            className="focus:shadow-outline w-full appearance-none rounded border border-gray-400 px-3 py-2 leading-tight text-gray-700 focus:border-[#00215E] focus:outline-none"
            ref={amount}
          />
        </div>
        <div className="mb-4 mr-4">
          <label className="mb-2 block text-lg font-bold text-gray-700">
            Description:
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border border-gray-400 px-3 py-2 leading-tight text-gray-700 focus:border-[#00215E] focus:outline-none"
            ref={description}
          />
        </div>
        <div className="mb-4 mr-4">
          <label className="mb-2 block text-lg font-bold text-gray-700">
            Category:
          </label>
          <select
            className="focus:shadow-outline w-full appearance-none rounded border border-gray-400 px-3 py-2 leading-tight text-gray-700 focus:border-[#00215E] focus:outline-none"
            ref={category}
          >
            <option value="Food">Food</option>
            <option value="Petrol">Petrol</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4 mr-4">
          <label className="mb-2 block text-lg font-bold text-gray-700">
            Date:
          </label>
          <input
            ref={date}
            type="date"
            className="focus:shadow-outline w-full appearance-none rounded border border-gray-400 px-3 py-2 leading-tight text-gray-700 focus:border-[#00215E] focus:outline-none"
          />
        </div>

        <button
          className="focus:shadow-outline mt-4 rounded bg-indigo-500 px-4 py-2 font-bold text-white hover:bg-indigo-700 focus:outline-none"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;

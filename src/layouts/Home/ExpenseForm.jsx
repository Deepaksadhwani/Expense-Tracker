import React, { useEffect, useState } from "react";
import usePostExpenseData from "../../hooks/usePostExpenseData";
import useGetExpenseData from "../../hooks/useGetExpenseData";
import Shimmer from "../../components/Shimmer";
const ExpenseForm = () => {
  const [loading, setLoading] = useState(false);
  const [expense, setExpense] = useState({
    amount: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevExpense) => ({ ...prevExpense, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const data = JSON.stringify(expense);

    usePostExpenseData(data,setLoading);

    setExpense({ amount: "", description: "", category: "Food" });

  };

  useEffect(() => {
    const fetchData = async() => {
      const expenseData  = await useGetExpenseData();
      console.log(expenseData)
    }
    fetchData();
    
  }, []);
  return loading ? <Shimmer/> : (
    <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-center text-3xl font-semibold text-gray-800">
        Enter Expense
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap items-center justify-center"
      >
        <div className="mb-4 mr-4">
          <label
            className="mb-2 block text-lg font-bold text-gray-700"
            htmlFor="amount"
          >
            Money Spent:
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border border-gray-400 px-3 py-2 leading-tight text-gray-700 focus:border-indigo-500 focus:outline-none"
            id="amount"
            type="number"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4 mr-4">
          <label
            className="mb-2 block text-lg font-bold text-gray-700"
            htmlFor="description"
          >
            Description:
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border border-gray-400 px-3 py-2 leading-tight text-gray-700 focus:border-indigo-500 focus:outline-none"
            id="description"
            type="text"
            name="description"
            value={expense.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6 mr-4">
          <label
            className="mb-2 block text-lg font-bold text-gray-700"
            htmlFor="category"
          >
            Category:
          </label>
          <select
            className="focus:shadow-outline w-full appearance-none rounded border border-gray-400 px-3 py-2 leading-tight text-gray-700 focus:border-indigo-500 focus:outline-none"
            id="category"
            name="category"
            value={expense.category}
            onChange={handleChange}
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

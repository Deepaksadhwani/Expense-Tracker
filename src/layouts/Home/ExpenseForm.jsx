import React, { useState } from 'react';

const ExpenseForm = () => {
  const [expense, setExpense] = useState({
    amount: '',
    description: '',
    category: '', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevExpense) => ({ ...prevExpense, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(expense);
    setExpense({ amount: '', description: '', category: 'Food' });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        Enter Expense
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-center items-center"
      >
        <div className="mb-4 mr-4">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="amount"
          >
            Money Spent:
          </label>
          <input
            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500"
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
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="description"
          >
            Description:
          </label>
          <input
            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500"
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
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="category"
          >
            Category:
          </label>
          <select
            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500"
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
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
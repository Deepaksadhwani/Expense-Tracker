import React, { useRef } from "react";
import useDeleteExpenseData from "../hooks/useDeleteExpenseData";
import Shimmer from "./Shimmer";
import useEditExpenseData from "../hooks/useEditExpenseData";

const Card = ({ amount, date, category, description, id, onSetLoading, loading }) => {
  const categoryRef = useRef(null);
  const descriptionRef = useRef(null);
  const dateRef = useRef(null);
  const amountRef = useRef(null);
  const editFormRef = useRef(null);

  const deleteExpenseEntry = () => {
    useDeleteExpenseData(id, onSetLoading);
  };

  const editExpenseDataHandler = () => {
    editFormRef.current.style.display = "block";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = JSON.stringify({
      amount: amountRef.current.value,
      date: dateRef.current.value,
      category: categoryRef.current.value,
      description: descriptionRef.current.value
    });
    
    useEditExpenseData(id,updatedData)
    editFormRef.current.style.display = "none"; 
  };

  return loading ? (
    <Shimmer />
  ) : (
    <div className="mx-auto my-2 flex w-[300px] flex-col overflow-hidden rounded-lg bg-white shadow-lg">
      <form ref={editFormRef} onSubmit={handleSubmit} style={{ display: "none" }} className="px-6 py-4">
        <input ref={categoryRef} type="text" className="border rounded-lg px-3 py-2 w-full mb-2" defaultValue={category} placeholder="Category" />
        <input ref={descriptionRef} type="text" className="border rounded-lg px-3 py-2 w-full mb-2" defaultValue={description} placeholder="Description" />
        <input ref={dateRef} type="date" className="border rounded-lg px-3 py-2 w-full mb-2" defaultValue={date} placeholder="Date" />
        <input ref={amountRef} type="number" className="border rounded-lg px-3 py-2 w-full mb-2" defaultValue={amount} placeholder="Amount" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mr-2">Save</button>
        <button type="button" onClick={() => editFormRef.current.style.display = "none"} className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg">Cancel</button>
      </form>
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold text-indigo-500">{category}</div>
        <p className="text-base text-gray-700">{description}</p>
      </div>
      <div className="flex items-center justify-between bg-gray-100 px-6 py-4">
        <div>
          <p className="text-gray-600">Date</p>
          <p className="font-semibold text-gray-800">{date}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600">Amount</p>
          <p className="text-2xl font-bold text-indigo-600">${amount}</p>
        </div>
      </div>
      <div className="flex justify-start bg-gray-50 px-6 py-4">
        <button
          onClick={editExpenseDataHandler}
          className="mr-2 rounded-lg bg-indigo-500 px-4 py-2 font-semibold text-white hover:bg-indigo-600"
        >
          Edit
        </button>
        <button
          onClick={deleteExpenseEntry}
          className="rounded-lg bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;

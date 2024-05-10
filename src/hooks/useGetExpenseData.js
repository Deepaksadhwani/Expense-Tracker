import { DATABASE_URL } from "../utils/constants";
import { addExpense } from "../store/expenseSlice";
import toast from "react-hot-toast";

const useGetExpenseData = async (dispatch) => {
  const response = await fetch(DATABASE_URL + "expense.json");

  const data = await response.json();
  console.log(data);
  if (response.ok) {
    dispatch(addExpense(data));
      toast.success("You're logged in! Dive into your expense details."
    )
  }
};

export default useGetExpenseData;

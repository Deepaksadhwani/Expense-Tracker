import { DATABASE_URL } from "../utils/constants";
import { addExpense } from "../store/expenseSlice";

const useGetExpenseData = async (dispatch) => {
  const response = await fetch(DATABASE_URL + "expense.json");

  const data = await response.json();
  console.log(data)
  dispatch(addExpense(data));
  
};

export default useGetExpenseData;

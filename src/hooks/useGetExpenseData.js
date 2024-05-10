import { DATABASE_URL } from "../utils/constants";
import { addExpense } from "../store/expenseSlice";

const useGetExpenseData = async (dispatch, setExpenseData) => {
  const response = await fetch(DATABASE_URL + "expense.json");

  const data = await response.json();
  console.log(data)
  
  setExpenseData(data);
  localStorage.setItem("expenseData",JSON.stringify(data));
  dispatch(addExpense(data));
  
};

export default useGetExpenseData;

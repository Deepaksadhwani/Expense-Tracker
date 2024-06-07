import { DATABASE_URL } from "../utils/constants";
import { addExpense } from "../store/expenseSlice";

const useGetExpenseData = async (dispatch, setExpenseData,email) => {
  console.log(email)
  const userEmail = email.slice(0, -9);
  console.log(userEmail)
  const response = await fetch(DATABASE_URL + `expense/${userEmail}.json`);

  const data = await response.json();


  
  setExpenseData(data);
  dispatch(addExpense(data));
};

export default useGetExpenseData;

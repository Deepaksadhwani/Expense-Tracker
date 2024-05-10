import { DATABASE_URL } from "../utils/constants";
import { addExpense } from "../store/expenseSlice";

const email = localStorage.getItem("email");
const useGetExpenseData = async (dispatch, setExpenseData) => {
  const email1 = email.slice(0, -9);
  const response = await fetch(DATABASE_URL + `expense/${email1}.json`);

  const data = await response.json();
  console.log(data);

  setExpenseData(data);
  localStorage.setItem("expenseData", JSON.stringify(data));
  dispatch(addExpense(data));
};

export default useGetExpenseData;

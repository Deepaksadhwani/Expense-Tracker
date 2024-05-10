import toast from "react-hot-toast";
import { DATABASE_URL } from "../utils/constants";

const usePostExpenseData = (dataExpense, setLoading) => {
  const postExpenseData = async () => {
    setLoading(true);
    const response = await fetch(DATABASE_URL + "expense.json", {
      method: "POST",
      body: dataExpense,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.ok) {
      toast.success("Expense entry Added wait some to reflect it on display.", {
        duration: 3000,
      });
    }
    console.log(data);
    setLoading(false);
  };
  postExpenseData();
};

export default usePostExpenseData;

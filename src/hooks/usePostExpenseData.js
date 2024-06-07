import toast from "react-hot-toast";
import { DATABASE_URL } from "../utils/constants";

const usePostExpenseData = (dataExpense, setLoading,email) => {

  const email1 = email.slice(0, -9);
  const postExpenseData = async () => {
    setLoading(true);
    const response = await fetch(`${DATABASE_URL}expense/${email1}.json`, {
      method: "POST",
      body: dataExpense,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data)
    if (response.ok) {
      toast.success("Expense entry is Successfully Added.");
    }
    
    setLoading(false);
  };
  postExpenseData();
};

export default usePostExpenseData;

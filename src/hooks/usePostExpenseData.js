import toast from "react-hot-toast";
import { DATABASE_URL } from "../utils/constants";

const email = localStorage.getItem("email");
const usePostExpenseData = (dataExpense, setLoading) => {
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

    if (response.ok) {
      toast.success("Expense entry is Successfully Added.");
    }
    console.log(data);
    setLoading(false);
  };
  postExpenseData();
};

export default usePostExpenseData;

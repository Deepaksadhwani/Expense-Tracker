import toast from "react-hot-toast";
import { DATABASE_URL } from "../utils/constants";

const useDeleteExpenseData = (id, email) => {
  const email1 = email.slice(0, -9);
  const deleteExpenseData = async () => {
    const response = await fetch(
      DATABASE_URL + `expense/${email1}/${id}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = await response.json();
    if (response.ok) {
      toast.success("Expense  entry is Successfully Deleted.");
    }
  };
  deleteExpenseData();
};

export default useDeleteExpenseData;

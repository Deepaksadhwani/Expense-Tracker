import toast from "react-hot-toast";
import { DATABASE_URL } from "../utils/constants";
const useDeleteExpenseData = (id, onSetLoading) => {
  const deleteExpenseData = async () => {
    onSetLoading(true);
    const response = await fetch(DATABASE_URL + `expense/${id}.json`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (response.ok) {
      toast.success(
        "Expense entry is Successfully Deleted, wait some time to update it on display.", {duration:2000}
      );
    }
    onSetLoading(false);
  };
  deleteExpenseData();
};

export default useDeleteExpenseData;

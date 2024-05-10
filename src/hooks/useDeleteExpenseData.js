import toast from "react-hot-toast";
import { DATABASE_URL } from "../utils/constants";

const email = localStorage.getItem("email");

const useDeleteExpenseData = (id, onSetLoading) => {
  const email1 = email.slice(0, -9);
  const deleteExpenseData = async () => {
    onSetLoading(true);
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
      toast.success(
        "Expense entry is Successfully Deleted, wait some time to update it on display.",
        { duration: 2000 },
      );
    }
    onSetLoading(false);
  };
  deleteExpenseData();
};

export default useDeleteExpenseData;

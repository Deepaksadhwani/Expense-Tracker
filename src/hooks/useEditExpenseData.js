import toast from "react-hot-toast";
import { DATABASE_URL } from "../utils/constants";





const useEditExpenseData = async(id,editedData,email) => {
  const email1 = email.slice(0, -9);

    const response = await fetch(DATABASE_URL + `expense/${email1}/${id}.json`, {
        method: "PUT",
        body:editedData,
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const data = await response.json();
      if (response.ok) {
        toast.success(
          "Expense entry is Successfully Edited."
        )
      }

};

export default useEditExpenseData;

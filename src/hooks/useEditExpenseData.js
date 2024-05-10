import toast from "react-hot-toast";
import { DATABASE_URL } from "../utils/constants";



const useEditExpenseData = async(id,editedData) => {
    const response = await fetch(DATABASE_URL + `expense/${id}.json`, {
        method: "PUT",
        body:editedData,
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const data = await response.json();
      if (response.ok) {
        toast.success(
          "Expense entry is Successfully Edit, wait some time to update it on display.", {duration:2000}
        )
      }else{
        console.log(data)
      }

};

export default useEditExpenseData;

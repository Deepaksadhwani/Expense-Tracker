import { DATABASE_URL } from "../utils/constants";

const usePostExpenseData = (dataExpense,setLoading) => {
  const postExpenseData = async () => {
    setLoading(true)
    const response = await fetch(DATABASE_URL + "expense.json", {
      method: "POST",
      body: dataExpense,
      headers: {
        "Content-Type": "application/json",
       
      },
    });

    const data = await response.json();

    console.log(data);
    setLoading(false)

  };
  postExpenseData();
  
};

export default usePostExpenseData;
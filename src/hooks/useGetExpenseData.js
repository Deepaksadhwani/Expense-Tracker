import React from "react";
import { DATABASE_URL } from "../utils/constants";

const useGetExpenseData = async () => {
  const response = await fetch(DATABASE_URL + "expense.json");

  const data = await response.json();

  return data;
};

export default useGetExpenseData;

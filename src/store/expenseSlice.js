import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expense",
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      return action.payload;
    },
    removeExpense: (state) => {
      state.length = 0;
    },
  },
});

export const { addExpense, removeExpense } = expenseSlice.actions;
export default expenseSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { token: null, userData: null },
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    removeToken: (action) => {
      return null;
    },
  },
});

export const { addToken } = userSlice.actions;
export default userSlice.reducer;

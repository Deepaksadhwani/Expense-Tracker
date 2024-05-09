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

    removeToken: (state, action) => {
      state.token = null;
    },
    removeUserData: (state, action) => {
      state.userData = null;
    },
  },
});

export const { addToken, removeToken, setUserData, removeUserData } =
  userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    email: "",
    isModalOpen: false,
  },
  reducers: {
    signupMail(state, action) {
      state.email = action.payload;
    },
    modalOpen(state) {
      state.isModalOpen = true;
    },
    modalClose(state) {
      state.isModalOpen = false
    }
  },
});

export const signupActions = signupSlice.actions;
export default signupSlice.reducer;

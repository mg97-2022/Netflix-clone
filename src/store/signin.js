import { createSlice } from "@reduxjs/toolkit";

const signinSlice = createSlice({
  name: "signin",
  initialState: { idToken: "", loggedIn: false },
  reducers: {
    loggedIn(state, action) {
      state.idToken = action.payload;
      state.loggedIn = !!state.idToken;
    },
    loggedOut(state) {
      state.idToken = "";
      state.loggedIn = false;
    },
  },
});

export const signinActions = signinSlice.actions;

export default signinSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";

import signupReducer from "./signup";
import signinReducer from "./signin";
import myListReducer from "./myList";
import showDetailReducer from "./showDetail";

const store = configureStore({
  reducer: {
    signup: signupReducer,
    signin: signinReducer,
    myList: myListReducer,
    showDetail: showDetailReducer,
  },
});
export default store;

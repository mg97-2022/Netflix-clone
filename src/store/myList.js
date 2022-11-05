import { createSlice } from "@reduxjs/toolkit";

const myListSlice = createSlice({
  name: "myList",
  initialState: {
    myList: [],
  },
  reducers: {
    addToList(state, action) {
      state.myList = action.payload
      // const existingMovie = state.myList.filter(
      //   (item) => item.id === action.payload.id
      // );
      // if (existingMovie.length !== 0) {
      //   return;
      // } else {
      //   state.myList.push(action.payload);
      // }
    },
    // removeFromList(state, action) {
    //   const newList = state.myList.filter((item) => item.id !== action.payload);
    //   state.myList = [...newList];
    // },
    // resetListChanged(state) {
    //   state.changed = false;
    // },
  },
});

export const myListActions = myListSlice.actions;
export default myListSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const showDetail = createSlice({
  name: "movieDetail",
  initialState: {
    showDetail: {},
  },
  reducers: {
    getShow(state, action) {
      state.showDetail = action.payload;
    },
  },
});

export const showDetailActions = showDetail.actions;
export default showDetail.reducer;

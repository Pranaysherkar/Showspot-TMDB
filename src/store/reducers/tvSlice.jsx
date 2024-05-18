import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    load_tvDetails: (state, action) => {
      state.info === action.payload;
    },
    remove_tvDetails: (state) => {
      state.info = null;
    },
  },
});

export const { load_tvDetails, remove_tvDetails } = tvSlice.actions;
export default tvSlice.reducer;
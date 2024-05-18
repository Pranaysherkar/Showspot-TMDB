import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    load_movieDetails: (state, action) => {
      state.info = action.payload;
    },
    remove_movieDetails: (state) => {
      state.info = null;
    },
  },
});

export const { load_movieDetails, remove_movieDetails } = movieSlice.actions;
export default movieSlice.reducer;
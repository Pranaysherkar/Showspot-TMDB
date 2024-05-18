import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    load_personDetails: (state, action) => {
      state.info === action.payload;
    },
    remove_personDetails: (state) => {
      state.info = null;
    },
  },
});

export const { load_personDetails, remove_personDetails } = personSlice.actions;
export default personSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  toggle: false,
};

const reduxState = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload;
    },

    toggle: (state, { payload }) => {
      state.toggle = payload;
    },
  },
});

export const { addUser, toggle } = reduxState.actions;

export default reduxState.reducer;

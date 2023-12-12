import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
};

const reduxState = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { addUser } = reduxState.actions;

export default reduxState.reducer;

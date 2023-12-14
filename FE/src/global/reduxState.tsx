import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  toggle: false,
  loading: false,
};

const reduxState = createSlice({
  name: "schoolProject",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.user = payload;
    },

    toggle: (state, { payload }) => {
      state.toggle = payload;
    },
    loading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

export const { loginUser, toggle, loading } = reduxState.actions;

export default reduxState.reducer;

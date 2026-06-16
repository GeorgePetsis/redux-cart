import { createSlice } from "@reduxjs/toolkit";

const initialShowState = { show: false };

const toggleSlice = createSlice({
  name: "toggler",
  initialState: initialShowState,
  reducers: {
    toggle(state) {
      state.show = !state.show;
    },
  },
});

export default toggleSlice.reducer;
export const toggleActions = toggleSlice.actions;

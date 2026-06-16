import { createSlice } from "@reduxjs/toolkit";

const initialShowState = { show: false, notification: null };

const toggleSlice = createSlice({
  name: "toggler",
  initialState: initialShowState,
  reducers: {
    toggle(state) {
      state.show = !state.show;
    },

    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export default toggleSlice.reducer;
export const toggleActions = toggleSlice.actions;

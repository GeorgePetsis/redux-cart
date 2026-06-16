import { createSlice } from "@reduxjs/toolkit";

const initialAddItemsState = { items: 0 };
const addItemSlice = createSlice({
  name: "addItem",
  initialState: initialAddItemsState,
  reducers: {
    add(state) {
      state.items++;
    },
  },
});

export default addItemSlice.reducer;
export const addItemActions = addItemSlice.actions;

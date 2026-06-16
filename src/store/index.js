import { configureStore } from "@reduxjs/toolkit";
import cartItemCounterSliceReducer from "./CartItem";
import toggleSliceReducer from "./Toggle";
import addItemSliceReducer from "./AddItem";

const store = configureStore({
  reducer: {
    itemCounter: cartItemCounterSliceReducer,
    toggler: toggleSliceReducer,
    addItem: addItemSliceReducer,
  },
});

export default store;

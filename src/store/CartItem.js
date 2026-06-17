import { createSlice } from "@reduxjs/toolkit";
import { toggleActions } from "./Toggle";

const initialItemCounterState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: "itemCounter",
  initialState: initialItemCounterState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const sendCart = (cart) => {
  return async (dispatch) => {
    dispatch(
      toggleActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "The data is sending!",
      }),
    );

    const sendRequest = async () => {
      const response = await fetch(
        `https://redux-backend-19f58-default-rtdb.europe-west1.firebasedatabase.app/cart.json`,
        {
          method: "PUT",
          body: JSON.stringify(cart),
        },
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        toggleActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Cart data sent successfully",
        }),
      );
    } catch (error) {
      dispatch(
        toggleActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Send cart data failed!",
        }),
      );
    }
  };
};

export default cartSlice.reducer;
export const cartItemCounterActions = cartSlice.actions;

import { cartItemCounterActions } from "./CartItem";
import { toggleActions } from "./Toggle";

export const fetchCart = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-backend-19f58-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      );

      if (!response.ok) {
        throw new Error("Fetching Data failed");
      }
      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartItemCounterActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        toggleActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        }),
      );
    }
  };
};

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
        "https://redux-backend-19f58-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
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
          message: "Cart data sent successfully!",
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

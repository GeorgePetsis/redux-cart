import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { Fragment } from "react";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Cart from "./components/Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
// import { toggleActions } from "./store/Toggle";
import { fetchCart, sendCart } from "./store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const isShown = useSelector((state) => state.toggler.show);
  const cart = useSelector((state) => state.itemCounter);
  const notification = useSelector((state) => state.toggler.notification);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCart(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isShown && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

// useEffect(() => {
//   const sendCart = async () => {
//     dispatch(
//       toggleActions.showNotification({
//         status: "pending",
//         title: "Sending...",
//         message: "Sending cart data!",
//       }),
//     );

//     const response = await fetch(
//       "https://redux-backend-19f58-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
//       {
//         method: "PUT",
//         body: JSON.stringify(cart),
//       },
//     );

//     if (!response.ok) {
//       throw new Error("Sending cart data failed.");
//     }

//     // const responsedData = await response.json();

//     dispatch(
//       toggleActions.showNotification({
//         status: "success",
//         title: "Success!",
//         message: "Sent cart data successfully!",
//       }),
//     );
//   };

//   if (isInitial) {
//     isInitial = false;
//     return;
//   }

//   sendCart().catch((error) => {
//     dispatch(
//       toggleActions.showNotification({
//         status: "error",
//         title: "Error!",
//         message: "Sent cart data failed!",
//       }),
//     );
//   });
// }, [cart, dispatch]);

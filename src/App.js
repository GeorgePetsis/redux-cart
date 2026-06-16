import { useEffect } from "react";

import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Cart from "./components/Cart/Cart";
import { useSelector } from "react-redux";

function App() {
  const isShown = useSelector((state) => state.toggler.show);
  const cart = useSelector((state) => state.itemCounter);

  useEffect(() => {
    fetch(
      "https://redux-backend-19f58-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
      },
    );
  }, [cart]);

  return (
    <Layout>
      {isShown && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

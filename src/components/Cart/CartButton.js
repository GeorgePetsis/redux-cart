import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleActions } from "../../store/Toggle";

const CartButton = (props) => {
  const quantityStore = useSelector((state) => state.itemCounter.totalQuantity);

  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(toggleActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantityStore}</span>
    </button>
  );
};

export default CartButton;

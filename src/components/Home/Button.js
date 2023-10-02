import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Button.scss";
export default function Button({ value }) {
  const { addToCart, increase, decrease, reduceFromCart } =
    useContext(CartContext);

  const AddtoCart = () => {
    addToCart({ value });
  };

  const increaseCart = () => {
    increase({ value });
  };
  const decreaseCart = () => {
    if (value.quantity > 1) {
      decrease({ value });
    } else {
      reduceFromCart(value.id);
    }
  };
  return (
    <div>
      {value.inCart ? (
        <div className="quantity">
          <button onClick={decreaseCart}>-</button>
          <p>{value.quantity}</p>
          <button onClick={increaseCart}>+</button>
        </div>
      ) : (
        <button onClick={AddtoCart}>Add to Cart</button>
      )}
    </div>
  );
}

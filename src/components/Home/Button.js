import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./Button.scss";
export default function Button({ value }) {
  const { addToCart, increase, decrease } = useContext(CartContext);
  const [cart, setCart] = useState(false);
  const AddtoCart = () => {
    setCart(true);
    addToCart({ value });
  };

  const increaseCart = () => {
    increase({ value });
  };
  const decreaseCart = () => {
    console.log(value);
    if (value.quantity === 1) {
      setCart(false);
    } else {
      decrease({ value });
    }
  };
  return (
    <div>
      {cart ? (
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

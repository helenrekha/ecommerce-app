import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./Button.scss";
export default function Button({ value }) {
  const { addToCart, increase, decrease, reduceFromCart } =
    useContext(CartContext);
  const [cart, setCart] = useState(false);
  const [cartvalue, setValue] = useState(1);

  const AddtoCart = () => {
    setCart(true);
    addToCart({ value });
  };

  const increaseCart = () => {
    setValue((prevvalue) => prevvalue + 1);
    increase({ value });
  };
  const decreaseCart = () => {
    setValue((prevvalue) => prevvalue - 1);
    if (cartvalue > 1) {
      decrease({ value });
    } else {
      setCart(false);
      reduceFromCart(value.id);
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

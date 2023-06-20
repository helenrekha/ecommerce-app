import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
export default function Button({ value }) {
  const { addToCart, reduceFromCart, increase, decrease } =
    useContext(CartContext);
  const [cart, setCart] = useState(false);
  const AddtoCart = () => {
    setCart(true);
    addToCart({ value });
  };
  const RemoveToCart = () => {
    setCart(false);
    reduceFromCart({ value });
  };
  const increaseCart = () => {
    increase({ value });
  };
  const decreaseCart = () => {
    decrease({ value });
  };
  return (
    <div>
      {cart ? (
        <>
          <button onClick={increaseCart}>+</button>
          <p>Add to Cart</p>
          <button onClick={decreaseCart}>-</button>
        </>
      ) : (
        <button onClick={AddtoCart}>Add to Cart</button>
      )}
    </div>
  );
}

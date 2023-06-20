import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartPage.scss";
export default function CartPage() {
  const { items, totalPrice, reduceFromCart, clearout } =
    useContext(CartContext);
  return (
    <div>
      {items.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        items.map((item) => {
          return (
            <div className="cartItem">
              <img src={item.value.image} alt={item.value.title} />
              <span>{item.value.title}</span>
              <span> x {item.value.quantity}</span>
              <span> {item.value.totalPrice}E</span>
              <button onClick={() => reduceFromCart({ item })}>Delete</button>
            </div>
          );
        })
      )}
      <h3>
        <span>Total</span>
        {totalPrice}&euro;
      </h3>
      <button onClick={() => clearout} className="ClearAll">
        Clear All
      </button>
    </div>
  );
}

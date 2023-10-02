import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartPage.scss";
import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from "react-router-dom";
export default function CartPage() {
  const { items, totalPrice, reduceFromCart, clearout } =
    useContext(CartContext);
  return (
    <div>
      <nav className="navbar_Cart">
        <Link to="/">SHOPPIE</Link>
      </nav>
      {items.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        items.map((item) => {
          return (
            <div className="cartItem" key={item.value.id}>
              <img src={item.value.image} alt={item.value.title} />
              <span className="title">{item.value.title}</span>
              <span> x {item.value.quantity}</span>
              <span> {Math.round(item.value.totalPrice)}&euro;</span>
              <RiDeleteBinFill
                className="icon"
                size={25}
                onClick={() => reduceFromCart(item.value.id)}
              />
            </div>
          );
        })
      )}
      <div className="CartCheckout">
        <button onClick={clearout} className="ClearAll">
          Clear All
        </button>
        <h3>
          <span>Total </span>
          {totalPrice}&euro;
        </h3>
        <button>Checkout</button>
      </div>
    </div>
  );
}

import "./Header.scss";
import cartImage from "../../assets/icons8-cart-50.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
export default function Header() {
  const { count } = useContext(CartContext);
  return (
    <nav className="navbar">
      <Link to="/">SHOPPIE</Link>

      <li>
        <Link to="/Cart">
          <img src={cartImage} alt="cart" />
          <span className="count">{count}</span>
        </Link>
      </li>
    </nav>
  );
}

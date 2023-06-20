import "./Header.scss";
import cartImage from "../../assets/icons8-cart-50.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
export default function Header() {
  const { items, count } = useContext(CartContext);
  return (
    <nav className="navbar">
      <li>Home</li>
      {console.log(typeof count)};
      <li>
        <Link to="/Cart">
          <img src={cartImage} alt="cart" />
        </Link>
      </li>
    </nav>
  );
}

import "./Header.scss";
import cartImage from "../../assets/icons8-cart-50.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Shoppie } from "../../assets/Shoppie.png";
import { AiOutlineSearch } from "react-icons/ai";
import Search from "./Search";
export default function Header() {
  const { count, products } = useContext(CartContext);
  return (
    <nav className="navbar">
      <Link to="/">Shoppie</Link>
      <Link>Categories</Link>
      <Link>Deals</Link>

      <AiOutlineSearch className="icon" />
      <li>
        <Link to="/Cart">
          <img src={cartImage} alt="cart" />
          <span className="count">{count}</span>
        </Link>
      </li>
    </nav>
  );
}

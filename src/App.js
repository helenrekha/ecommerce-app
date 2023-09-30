import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/CartPage";
import { CartProvider } from "./components/context/CartContext";
import { ProductProvider } from "./components/context/ProductContext";
import ImageLoader from "./components/Home/ImageLoader";
function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/cart" Component={Cart} />
            <Route path="/products" Component={ImageLoader} />
          </Routes>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;

import {
  BrowserRouter, Route,Routes,
} from "react-router-dom";
import Home from './components/Home/Home'
import Cart from './components/Cart/CartPage';
import { CartProvider } from "./components/context/CartContext";
function App(){ 

  return (
    <BrowserRouter>
    <CartProvider>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/Cart" Component={Cart}/>
      </Routes>
      </CartProvider>
   </BrowserRouter>
  )
}

export default App

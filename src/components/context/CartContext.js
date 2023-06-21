import { useReducer } from "react";
import { createContext } from "react";
import { useOutlet } from "react-router-dom";

export const CartContext = createContext({
  items: [],
  count: 0,
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, {
    items: [],
    count: 0,
    totalPrice: 0,
  });
  const sumOfItems = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += parseInt(item.value.quantity);
    });
    return total;
  };
  const TotalPrice = (items) => {
    let total = 0;
    items.forEach((item) => (total += parseInt(item.value.totalPrice)));
    return total;
  };

  const addToCart = (product) => {
    let totalPrice = product.value.price;
    product.value.totalPrice = totalPrice;
    const updatedCart = [...state.items, product];
    dispatch({
      type: "ADD",
      payload: {
        items: updatedCart,
        sum: sumOfItems(updatedCart),
        totalPrice: TotalPrice(updatedCart),
      },
    });
  };
  const reduceFromCart = (product) => {
    let updatedCart = state.items.filter(
      (item) => item.value.id !== product.item.value.id
    );
    dispatch({
      type: "REDUCE",
      payload: {
        items: updatedCart,
        sum: sumOfItems(updatedCart),
        totalPrice: TotalPrice(updatedCart),
      },
    });
  };
  const increase = (product) => {
    state.items.forEach((item) => {
      if (item.value.id === product.value.id) {
        item.value.quantity++;
      }
    });
    product.value.totalPrice *= product.value.quantity;
    dispatch({
      type: "INCREASE",
      payload: {
        items: state.items,
        sum: sumOfItems(state.items),
        totalPrice: TotalPrice(state.items),
      },
    });
  };
  const decrease = (product) => {
    state.items.forEach((item) => {
      if (item.value.id === product.value.id) {
        item.value.quantity--;
      }
    });
    dispatch({
      type: "DECREASE",
      payload: {
        items: state.items,
        difference: sumOfItems(state.items),
        totalPrice: TotalPrice(state.items),
      },
    });
  };
  const clearout = () => {
    dispatch({
      type: "CLEAR",
    });
  };

  const value = {
    items: state.items,
    addToCart,
    reduceFromCart,
    increase,
    decrease,
    clearout,
    count: state.count,
    totalPrice: state.totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      return {
        ...state,
        items: payload.items,
        count: payload.sum,
        totalPrice: payload.totalPrice,
      };
    case "REDUCE":
      return {
        ...state,
        items: payload.items,
        count: payload.sum,
        totalPrice: payload.totalPrice,
      };
    case "INCREASE":
      return {
        ...state,
        items: payload.items,
        count: payload.sum,
        totalPrice: payload.totalPrice,
      };
    case "DECREASE":
      return {
        ...state,
        items: payload.items,
        count: payload.difference,
        totalPrice: payload.totalPrice,
      };
    case "CLEAR":
      return {
        items: [],
        count: 0,
        totalPrice: 0,
      };
    default:
      return new Error("Error case");
  }
};

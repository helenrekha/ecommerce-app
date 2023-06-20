import { useReducer } from "react";
import { createContext } from "react";

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
    console.log(items);
    let total = 0;
    items.forEach((item) => (total += parseInt(item.value.quantity)));
    return total;
  };

  const addToCart = (product) => {
    const updatedCart = [...state.items, product];
    dispatch({
      type: "ADD",
      payload: {
        items: updatedCart,
        sum: sumOfItems(updatedCart),
      },
    });
  };
  const reduceFromCart = (product) => {
    let updatedCart = state.items.filter(
      (item) => item.value.id !== product.value.id
    );
    console.log(updatedCart);
    dispatch({
      type: "REDUCE",
      payload: {
        items: updatedCart,
        sum: sumOfItems(updatedCart),
      },
    });
  };
  const increase = (product) => {
    state.items.forEach((item) => {
      if (item.value.id === product.value.id) {
        item.value.quantity++;
      }
    });
    dispatch({
      type: "INCREASE",
      payload: {
        items: state.items,
        sum: sumOfItems(state.items),
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
      },
    });
  };
  const clearout = () => {};

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
      console.log(state);
      console.log(state.count);
      return {
        ...state,
        items: payload.items,
        count: payload.sum,
      };
    case "REDUCE":
      console.log(state);
      return {
        ...state,
        items: payload.items,
        count: payload.sum,
      };
    case "INCREASE":
      console.log(payload.sum);
      return {
        ...state,
        items: payload.items,
        count: payload.sum,
      };
    case "DECREASE":
      console.log(payload.difference);
      return {
        ...state,
        items: payload.items,
        count: payload.difference,
      };
    default:
      return new Error("Error case");
  }
};

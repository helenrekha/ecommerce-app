import { useReducer } from "react";
import { createContext } from "react";

export const CartContext = createContext({
  items: [],
  count: 0,
  totalPrice: 0.0,
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
    let total = 0.0;
    items.forEach((item) =>
      parseFloat((total += parseFloat(item.value.totalPrice)))
    );
    return parseFloat(total);
  };

  const addToCart = (product) => {
    let totalPrice = product.value.price;
    product.value.totalPrice = totalPrice * product.value.quantity;
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
  const reduceFromCart = (id) => {
    let updatedCart = state.items.filter(
      (item) => item.value.id !== Number(id)
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
    product.value.totalPrice = product.value.quantity * product.value.price;

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
    product.value.totalPrice = product.value.price * product.value.quantity;
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
    console.log("inside clearout");
    dispatch({
      type: "CLEAR",
      payload: {
        items: [],
        count: 0,
        totalPrice: 0,
      },
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
        items: payload.items,
        count: payload.count,
        totalPrice: payload.totalPrice,
      };
    default:
      return new Error("Error case");
  }
};

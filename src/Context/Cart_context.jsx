/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducer/CartReducer";
import { useEffect } from "react";
const CartContext = createContext();

const getLocalCartData = () => {
  let LocalCartData = localStorage.getItem("vsCart");
  // if (LocalCartData == []) {
  //   return [];
  // } else {
  //   return JSON.parse(LocalCartData);
  // }
  const parseData = JSON.parse(LocalCartData);
  if (!Array.isArray(parseData)) return [];
  return parseData;
};
const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 5000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };
  // to Decrease a Item
  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREASE", payload: id });
  };
  // to Increase a Item

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREASE", payload: id });
  };
  // to Remove a Item

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  // to Clear the Cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  //  to add the data in localStorage
  // Get & Set
  useEffect(() => {
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    localStorage.setItem("vsCart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setIncrease,
        setDecrease,
      }}>
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };

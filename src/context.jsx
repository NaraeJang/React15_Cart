import { useContext, useReducer, useEffect, createContext } from "react";
import cartItems from "./data";
import reducer from "./reducer";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((cart) => [cart.id, cart])),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  return (
    <AppContext.Provider value={{ ...state, dispatch, clearCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

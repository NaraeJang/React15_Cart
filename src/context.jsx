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

const newCartItems = cartItems.map((cart) => [cart.id, cart]);

const newCart = new Map(newCartItems);
const newCartArray = Array.from(newCart.entries());

const initialState = { loading: false, cart: [...newCartArray] };

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

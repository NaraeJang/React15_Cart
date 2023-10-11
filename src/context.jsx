import { useContext, useReducer, useEffect, createContext } from "react";
import cartItems from "./data";
import reducer from "./reducer";

const AppContext = createContext();

const initialState = { loading: false, cart: cartItems };

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

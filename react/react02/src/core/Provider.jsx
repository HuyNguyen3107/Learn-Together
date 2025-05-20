import React, { createContext, useReducer } from "react";
import { initialValue, reducer } from "./reducer";

export const ProviderContext = createContext();
function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <ProviderContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ProviderContext.Provider>
  );
}

export default Provider;

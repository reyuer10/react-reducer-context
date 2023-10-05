
// import react hooks and the 2 element of useReducer
// this is seperated file that name "reducer.js"
// 
import React,{ createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

// export the "AppContext" file
// create context for the AppContext
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

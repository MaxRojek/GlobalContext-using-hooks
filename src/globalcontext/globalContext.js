import React, { createContext } from "react";

export const appInfo = {
  creator: "Marcin",
  theme: "light",
  purpos: "exercise",
  color: "black",
};



const globalStateContext = React.createContext(appInfo);
export const GlobalStateContextProvider = globalStateContext.Provider;
export default globalStateContext;

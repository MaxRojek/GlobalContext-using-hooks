import React, { createContext, useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import globalStateContext,{ GlobalStateContextProvider} from "../src/globalcontext/globalContext";
import Text from "../src/components/text";

function App() {
  const Info = useContext(globalStateContext);
  const [order, setOrder] = useState(2);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>

        <p>{Info.creator}</p>
        <GlobalStateContextProvider value={{orderDispatcher:[order,setOrder]}}>
          <Text />
        </GlobalStateContextProvider>
      </header>
    </div>
  );
}

export default App;

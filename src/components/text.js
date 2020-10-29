import React, { createContext, useContext, useState } from "react";
import globalStateContext from "../globalcontext/globalContext";
function Text() {
  //const msg = useContext(globalStateContext);

  const { orderDispatcher } = useContext(globalStateContext);
  const [order, setOrder] = orderDispatcher;
  const [text, setText] = useState("");

  return (
    <>
      <h2>Name:{order} </h2>

      {value => (
        <div>
          {value}+{text}
        </div>
      )}
    </>
  );
}
export default Text;

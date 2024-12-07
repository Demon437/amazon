import React, { useReducer } from "react";

const initialstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;

    case "Decrement":
      return state - 1;

    default:
      return state;
  }
};

function ReducerHook() {
  const [count, dispatch] = useReducer(reducer, initialstate);

  return (
    <div>
      <h1>count{count}</h1>
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <br />
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
    </div>
  );
}

export default ReducerHook;

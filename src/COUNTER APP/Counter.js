import React, { useState } from "react";
import "./Counter.css";
function Counter() {
  let increse = () => {
    setCount(counting + 1);
  };

  let decrease = () => {
    setCount(counting - 1);
  };

  let [counting, setCount] = useState(0);
  return (
    <>
      <div className="box">
        <div className="output">Count:{counting}</div>
        <div className="btn">
          <button onClick={increse}>+</button>
          <button onClick={decrease}>-</button>
        </div>
      </div>
    </>
  );
}

export default Counter;

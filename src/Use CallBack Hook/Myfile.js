import React, { useCallback } from "react";
import { useState } from "react";
import Childfile from "./Childfile";

function Myfile() {
  const [data, setData] = useState(0);
  const [count, setCount] = useState(0);

  const deta = useCallback(() => {
    // some component
  }, [count]);
  
  return (
    <div>
      <Childfile deta={deta} count={count}></Childfile>

      <h1>{data}</h1>
      <button onClick={() => setData(data + 1)}>Click Now</button>

      <h1>{count}</h1>
      <button onClick={() => setCount(count + 2)}>Count Button</button>
    </div>
  );
}

export default Myfile;

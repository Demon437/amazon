import { useState } from "react";

function UseMyHook() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return [count, increment, decrement];
}

export default UseMyHook;

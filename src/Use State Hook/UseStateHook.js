import { useState } from "react";

function UseStateHook() {
  const [counting, setCount] = useState(0);
  function update() {
    setCount(counting + 1);
  }
  return (
    <div>
      <h1>
        count: {counting} <button onClick={update}>Click Now</button>{" "}
      </h1>
    </div>
  );
}
export default UseStateHook;

import { useState } from "react";

function Work() {
  var [name, setName] = useState("java");
  function chnage() {
    setName("javascript");
  }
  return (
    <div>
      <h1>This is {name}</h1>
      <button onClick={chnage}>Click Now</button>
    </div>
  );
}
export default Work;

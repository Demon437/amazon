import React, { useState } from "react";
import { useRef } from "react";
function UseRef() {
  let RefEelement = useRef();
  let [name, setName] = useState("World");
  console.log(RefEelement);
  function Reset() {
    RefEelement.current.focus();
    setName(" ");
  }
  function EffectButton() {
    RefEelement.current.style.color = "pink";
  }
  return (
    <div>
      <h2>hello</h2>
      <input
        ref={RefEelement}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={Reset}>Reset</button>
      <button onClick={EffectButton}>Button 2</button>
    </div>
  );
}

export default UseRef;

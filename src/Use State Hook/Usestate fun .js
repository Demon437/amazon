// useState method with function component

import { useState } from "react";

function Usestatefun() {
  var [name, setName] = useState("Manthan");
  function hello() {
    setName("Manthan Namdev");
  }
  return (
    <div>
      <h1>Use state Function</h1>
      <h2>My name is {name}</h2>
      <button onClick={hello} style={{ backgroundColor: "yellow" }}>
        Click now
      </button>
    </div>
  );
}
export default Usestatefun;

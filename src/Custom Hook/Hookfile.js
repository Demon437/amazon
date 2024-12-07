// Apna khud ka hook banana or iske liye 2 file ka use krna hota  hai
//  isme jo hamari component file hoti hai usme bas hamko important element likhna hota hai
//  jese ki H1, Button, etc. or const me wo sare vareable jo ham hamare Hook file me hogi
//  Baki sab ham hamari Hook file me likhenge.

import React from "react";
import UseMyHook from "./UseMyHook";

function Hookfile() {
  const [count, increment, decrement] = UseMyHook();

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increment}>increment</button> <br />
      <br /> <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default Hookfile;

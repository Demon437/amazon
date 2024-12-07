import React, { useState } from "react";

function Control() {
  const [name, setName] = useState("john");
  function handlechange(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }

  return (
    <div>
      <form className="App">
        <label>First name:</label>
        <br />
        <input type="text" value={name} onChange={handlechange} />
      </form>
    </div>
  );
}

export default Control;

// Controll component me ham component ko control kar sakte hai jese ki
//  input type me input value ko change karna wo ham control comopent se kar sakte hai
// react me input value ko change nhi kiya ja sakta hai without control component ke

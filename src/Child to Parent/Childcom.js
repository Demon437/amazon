import React from "react";
import { useState } from "react";

function Childcom(props) {
  const [name, setName] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    props.getdata(name);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Childcom;

// iske baad app.js me ek function banao fir us function me as a prop pass karo child wale component

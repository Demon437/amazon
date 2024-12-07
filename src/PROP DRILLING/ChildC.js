import React from "react";

function ChildC({ amount }) {
  return (
    <div>
      <h1>Prop Drilling</h1>
      <h3>answer{amount}</h3>
    </div>
  );
}

export default ChildC;

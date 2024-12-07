import React from "react";
import ChildC from "./ChildC";

function ChildB({ amount }) {
  return (
    <div>
      <ChildC amount={amount} />
    </div>
  );
}

export default ChildB;

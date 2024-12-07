import React from "react";
import ChildB from "./ChildB";

function ChildA({ amount }) {
  return (
    <div>
      <ChildB amount={amount} />
    </div>
  );
}

export default ChildA;

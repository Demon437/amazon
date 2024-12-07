import { useMemo, useState } from "react";
import React from "react";
function Memo() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);
  const multi = useMemo(
    function multiply() {
      console.log("************");
      return add * 10;
    },
    [add]
  );
  return (
    <div>
      <h1> Use Memo Function</h1>
      {multi} <br />
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <span>{add}</span> <br />
      <br />
      <button onClick={() => setMinus(minus - 1)}>minus</button>
      <span>{minus}</span>
    </div>
  );
}
export default Memo;

// This use for improve Performance and fast

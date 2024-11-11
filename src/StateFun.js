// useState TWO type method on Function component

import { useState } from "react";

function StateFun() {
  // var amount = 10000
  // function changeamt()
  // {
  //     // amount=20000
  //     setAmount(20000)
  // }

  return (
    <div>
      <h1>My Amount is {amount}</h1>
      <button onClick={() => setAmount(20000)}>Submit</button>
    </div>
  );
}
export default StateFun;

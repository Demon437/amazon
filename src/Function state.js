// import { useState } from "react";

// function Functionstate() {
//   let [amount, setAmount] = useState(10000);

//   return (
//     <div>
//       <h1>My amount is {amount}</h1>
//       <button onClick={() => setAmount(20000)}>Button</button>
//     </div>
//   );
// }
// export default Functionstate;

// useState me 2 method hoti hai ye hai 2 method

import { useState, React } from "react";

function Functionstate() {
  let [count, setcount] = useState(10000);

  function update() {
    setcount((count = 20000));
  }
  return (
    <div>
      <h1>Button clicked {count}times</h1>
      <button onClick={update}>Button</button>
    </div>
  );
}
export default Functionstate;

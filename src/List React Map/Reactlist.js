import React from "react";

function Reactlist() {
  // example:- 1
  const data = ["India", "Chaina", "USA"];
  const data2 = data.map((a) => <h1>{a}</h1>);

  //   example:- 2
  const count = [1, 2, 3, 4];
  const counter = count.map((x) => <h1> {x * 2} </h1>);

  const name = ["Yogesh", "Manthan", "Raju"];
  const namelist = name.map((b) => <h1>{b}</h1>);
  return (
    <div>
      <h1>{data2}</h1>
      {counter}
      <div>
        {namelist}
      </div>
    </div>
  );
}

export default Reactlist;

// koi bhi value or data ko list me show karna ho react mein

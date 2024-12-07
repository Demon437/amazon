import React, { useState } from "react";

function UsestateObject() {
  const [data, setData] = useState({ first: "Manthan", secound: "Namdev" });
  function update() {
    setData({ ...data, first: "Shanu", third: "Done" });
  }

  return (
    <div>
      <h1>
        My name is {data.first} and My last name is {data.secound} and This is{" "}
        {data.third}
      </h1>
      <button onClick={update}> Click Now </button>
    </div>
  );
}

export default UsestateObject;

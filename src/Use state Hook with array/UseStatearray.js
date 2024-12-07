import React, { useState } from "react";

function UseStatearray() {
  const [items, setItems] = useState([]);
  function update() {
    setItems([
      ...items,
      {
        id: items.length,
        values: Math.random(),
      },
    ]);
  }
  return (
    <div>
      <ol>
        {items.map((item) => (
          <li key={item.id}>{item.values}</li>
        ))}
      </ol>
      <button onClick={update}>Add item</button>
    </div>
  );
}

export default UseStatearray;

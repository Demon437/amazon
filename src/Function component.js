// import { useState } from "react";

import { useState } from "react";

// import { useState } from "react";

// function Functioncomponent() {
//   let [counting, setCount] = useState(0);
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Simple Counter</h1>
//       <h2>{counting}</h2>
//       <button onClick={() => setCount(counting + 1)}>Increase</button>
//       <button onClick={() => setCount(counting - 1)}>Decrease</button>
//     </div>
//   );
// }
// export default Functioncomponent;

function Functioncomponent() {
  let [task, setTask] = useState([]);
  let [newtask, setNewtask] = useState("");

  let Addtask = () => {
    if (newtask.trim() !== "") setTask([task, newtask]);
    setNewtask[""];
  };

  return (
    <div>
      <h1>Simple To-Do List</h1>
      <input
        type="text"
        value={newtask}
        onChange={(e) => setNewtask(e.target.value)}
      />
      <button onClick={Addtask}>Click Now</button>

      <ul>
        <li>
          {task.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </li>
      </ul>
    </div>
  );
}
export default Functioncomponent;

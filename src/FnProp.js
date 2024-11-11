import { useState } from "react";
import Funprop11 from "./FnProp11";

// Function Component with Prop (isme 2 file run hoti hai  )

function FnProp() {
  const [name, setName] = useState("Ram");
  const [age, setAge] = useState("25");
  {
    setName("syam");
    setAge(30);
  }
  return (
    <div>
      <Funprop11 name={name} age={age}></Funprop11>
      <button onClick={changeData}>Submit</button>
    </div>
  );
}
export default FnProp;

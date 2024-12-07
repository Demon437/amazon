import React, { useContext } from "react";
import { data, data1 } from "../App";
function File3() {
  const firstname = useContext(data);
  const firstage = useContext(data1);
  return (
    <>
      <h1>
        My name is {firstname} and my age is {firstage}
      </h1>
    </>
  );
}

export default File3;

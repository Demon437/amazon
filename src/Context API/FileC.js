import React from "react";
import { abc } from "../App";
function FileC() {
  return (
    <>
      <abc.Consumer>
        {(name) => {
          return <h1>My Name is {name}</h1>;
        }}
      </abc.Consumer>
    </>
  );
}
export default FileC;

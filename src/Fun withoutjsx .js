import React from "react";
import { createElement } from "react";

function Funwithoutjsx() {
  return React.createElement(
    "div",
    { className: "my-class" },

    <h1> "Hello, this is a component without JSX"</h1>,
    <h1>File name Test.js</h1>,
    <h1>Shanu</h1>
  );
}
export default Funwithoutjsx;

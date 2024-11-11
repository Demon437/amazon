import { Component } from "react";

class Mount extends Component {
  render() {
    console.log("render");
    return (
      <div>
        <h1>first mount </h1>
      </div>
    );
  }
  constructor() {
    super();
    console.log("constructor");
  }
  componentDidMount() {
    console.log("component did amount ");
  }
}

export default Mount;




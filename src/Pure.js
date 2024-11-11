import { render } from "@testing-library/react";
import { PureComponent } from "react";

class Pure extends PureComponent {
  constructor() {
    super();
    this.state = {
      Count: 0,
    };

    render();
    {
      console.log("hello");
    }
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: 1 })}>Submit</button>
      </div>
    );
  }
}
export default Pure;

import { Component } from "react";

class PropsClasscmp extends Component {
  render() {
    return (
      <div>
        <h1>indore</h1>
        <h1>bhopal</h1>
        <h1>maksi</h1>
        <h1>kota</h1>
        <h1>{this.props.citydata}</h1>
        <h1>{this.props.data}</h1>
      </div>
    );
  }
}
export default PropsClasscmp;

// Class component mein props (app.js) ke data ko Class component wali file me add karta hai
// isme hamko (this.props) ka use karna hota hai or function component me ham only props ka use karte hai
// baki same hai function or class props

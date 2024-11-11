import { Component } from "react";

class Update extends Component
{
    super()
   this.state={
    name:"ram"
   }
   console.log("Constructor")
}

render()
{
    console.log("Render")

return(
    <div>
        <h1>My name is {this.state.name}</h1>
        <button onClick={()=>this.state({name:"syam"})}>Submit</button>
    </div>
)
}

ComponentDid
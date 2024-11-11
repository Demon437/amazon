import { Component } from "react";
class ClassState extends Component
{
    constructor()
    {
        super();
        this.state = 
        { amount:10000 }
    }
    render()
    {
        return(
            <div>
                <h1>My amount is {this.state.amount}</h1>
                <button onClick={()=>this.setState({amount:20000})}>Submit</button>
            </div>
        )
    }
}
export default ClassState

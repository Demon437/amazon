const {Component}= require("react")
class classState extends Component
{
    constructor()
    {
        super()
        this.state=
        {
            amount:10000
        }
    }
    render()
    {
        return(
            <div>My amount is{this.state.amount}
            <button onClick={()=>this.setState(20000)}>Submit</button>
            </div>
        )
    }
}
export default classState
import { useState } from "react"

function Input()
{


const [data,setData]=useState()
return(
    <div>
        <form>
            <input type="text" placeholder="Enter Name"
            onChange={(e)=>setData(e.target.value)}/><br></br>
        </form>
        <h1>{data}</h1>
    </div>
)
}
export default Input
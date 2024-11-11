const { useState } = require("react");

function Form(){
    const [name,setName]=useState()
    const [add,setAdd]=useState()
    const [country,setCountry]=useState()
    function submitForm(e)
     {
    e.preventDefault()
    console.log(name,add,country)
}
return(


<div>
    
    <form onSubmit={submitForm}>
            <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="Enter Add" onChange={(e)=>setAdd(e.target.value)}/>
            <select onChange={(e)=>setCountry(e.target.value)}>
                <option>select country</option>
                <option>India</option>
                <option>China</option>
                <option>Japan</option>
                 <option>US</option>
                 <option>UK</option>
                 </select> <br></br>
                 <button>Submit</button>

    </form>
</div>
)
}
export default Form

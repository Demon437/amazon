import { useState } from "react";

function Funstate()
{
    const [currentamount, setAmount]=useState("10000")

    const changeamount= () => {
        setAmount("20000");
    };


return(
    <div>
        <h1>My amount is{currentamount}</h1>
<button onClick={changeamount}>Submit</button>
    </div>
    
)
}

export default Funstate
import React, { Component } from 'react'

class Classprop1 extends Component
{
    render()
    {
        return(
            <div>
               <h1>My Name is {this.props.name}</h1>
               <h2>My age is {this.props.age}</h2>        
            </div> 
        )
    }
}
export default Classprop1





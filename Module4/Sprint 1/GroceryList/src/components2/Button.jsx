import React from 'react'

const Button =(props)=>{
    return (
        <button style = {{padding:"5px",color:"white",backgroundColor:"lightblue",width:"50px"}} >{props.label}</button>
    )
}
export default Button
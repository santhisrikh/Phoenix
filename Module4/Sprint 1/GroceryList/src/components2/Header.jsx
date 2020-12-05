import React from 'react'
import {Name} from "./Name"

class Header extends React.Component{
    render(){
        const {name,color} = this.props
        return(
            <Name name = {name} color = {color}/>
        )
    }
}
export default Header
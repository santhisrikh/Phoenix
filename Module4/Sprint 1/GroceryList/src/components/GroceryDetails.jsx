import React from 'react'
import data from "./data.json"
import GroceryCard from "./GroceryCard"
import styles from "./GroceryDetails.module.css"

class GroceriesDetails extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data :[...data]
        }
    }
    render(){
        const {data} = this.state
        console.log(data)
        return(
            <div className = {styles.container}>
                {data.map(item=>{
                    return <GroceryCard item = {item}/>
                })}
            </div>
        )
    }
}
export default GroceriesDetails
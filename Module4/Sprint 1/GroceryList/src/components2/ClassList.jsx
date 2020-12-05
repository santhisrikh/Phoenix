import React from "react"
import styles from  "./classList.module.css"
import Button from "./Button"

class ClassList extends React.Component{
    render(){
        return(
            <div>
                <h1 className = {styles.header}>Course offered</h1>
                <ol>
                    <li>Full stack Web</li>
                    <li>Fullstack Android</li>
                </ol>
                <Button/>
            </div>
        )
    }
}
export default ClassList
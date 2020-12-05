import React from 'react'
import styles from "./card.module.css"
import Button from "./Button"
import Logo from "./Logo"
import Title from "./Title"
import SubTitle from "./SubTitle"
const Card = ({logo,title,subTitle,label,color}) =>{
    return(
        <div className = {styles.card} style = {{backgroundColor:color}}>
            <div>
                <Logo logo = {logo} height = "50px" width = "50px" />
                
            </div>
            <div>
                <Title title = {title} />
                <SubTitle  subTitle = {subTitle}/>
                <Button label = {label}/>
            </div>

        </div>
    )
}
export default Card
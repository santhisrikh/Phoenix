import React from 'react'

class Counter extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            value :2,
            query:"",
            result :"",
            isDone:false
                }
        // this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange = (e)=>{
        console.log(e.target.value)
        const {value} = e.target
        this.setState({
            query:value
        })

    }
    handleAdd = ()=>{
        this.setState({
            res:this.state.query,
            isDone:!this.state.isDone
        })

    }
    handleClick(){
        console.log(this)
        this.setState(prevState=>{
            return {
                value:prevState.value+1
            }
        })
        this.setState(prevState=>{
            return {
                value:prevState.value*2
            }
        })
       
    }
    render(){
        return(
            <div>
                <h1>{this.state.value}</h1>
                <button onClick = {this.handleClick}>+</button>
                <h2>Value added {this.state.res}</h2>
                <input type = "text" value = {this.state.query} onChange = {this.handleChange}  />
                <button onClick = {this.handleAdd}>{this.state.isDone?"Off":"ON"}</button>
            </div>
        )


    }
}
export default Counter
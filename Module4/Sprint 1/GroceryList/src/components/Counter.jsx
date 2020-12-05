import React from 'react'

class Counter  extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            query :"santhi",
            res:"",
            id:"name"
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        // console.log(id)
        console.log(e.target.value)
        // this.state.query = e.target.value
        this.setState({
            query:e.target.value
        })

    }
    handleClick = ()=>{
        this.setState({
            res:this.state.query
        })
    }
    render(){
        const {res} = this.state
        return(
            <div>
                <h1>{res}</h1>
                <input  value = {this.state.query} onChange = {this.handleChange} type = "text" />
                <button onClick = {this.handleClick}>Enter</button>
            </div>
        )
    }

}
export default Counter
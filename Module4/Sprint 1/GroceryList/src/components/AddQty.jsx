import React from "react"

class AddQty extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count :0
        }
    }
    handleAdd = () =>{
        this.setState({
            count:this.state.count+1
        })
    }
    handleReduce = ()=>{
        this.setState ({
            count:this.state.count-1
        })
    }
    render(){
        return(
            <div style = {{display:"flex"}}>
<!--   we can use diabled property of button  to make the (-) button inactive if the qty bexomes Zero.              -->
                <button disabled = {this.state.count<=0} onClick = {this.handleReduce}>-</button>
                <p style = {{margin:"2px"}}>{this.state.count}</p>
                <button onClick = {this.handleAdd}>+</button>
            </div>
        )
    }
}
export default AddQty

import React,{Component} from 'react'

class  Title  extends Component {
    // console.log(props)
    render(){
        console.log(this.props)
        const {name,color} = this.props
    return <div>
        <h1 style = {{color:color}}>Hello {name}!</h1>
    </div>

    }
}
export default Title
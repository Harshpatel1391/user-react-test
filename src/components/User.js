import { Component } from "react";

export default class User extends Component{


    
    

    render(){
        return(
            <div>
            <span>{this.props.user}</span>
            <button onClick={this.props.del(`${this.props.key}`)}>Remove</button>
            </div>
        )
    }
    
}
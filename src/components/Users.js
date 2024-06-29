import { Component } from "react";
import User from "./User";

export default class Users extends Component{
    render(){
        return(
            <div>
            <h3>Users</h3>
            {this.props.userdata.map((ud , index)=> <User key={index} user={ud} del={this.props.du}></User>)}
            <button onClick={this.props.da} disabled={this.props.hasdata== 0} className="btn btn-warning">Delete All</button>
            
            </div>
        )
    }
    
}
import { Component } from "react";

export default class AddUsers extends Component{
    addUser = (e) =>{
        e.preventDefault()
        // alert("User is added")
        const data = e.target.elements.uname.value
        this.props.au(data)
    }
    render(){
        return(
            <div>
            <span>AddUser</span>
            <form onSubmit={this.addUser}>
                <input type="text" name='uname'></input>
                <button className="btn btn-primary">Add</button>
            </form>
            </div>
        )
    }
    
}
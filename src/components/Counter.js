import { Component } from "react";

export default class Counter extends Component{
    state={
        counter:1
    }

    increament =(e) =>{
        e.preventDefault()
        // alert("Increament");
        this.setState((prevState)=>{
            return{
                counter: prevState.counter+1
            }
        })
    }

    decreament =(e)=>{
        e.preventDefault()
        // alert("Decreament");
        this.setState((prevState)=>{
            return{
                counter: prevState.counter-1
            }
        })
    }
    render(){
        return(
            <form>
                <p>Counter :{this.state.counter}</p>
                <button onClick={this.increament} className="btn btn-success">increament</button>
                <button onClick={this.decreament} className="btn btn-danger">Decreament</button>
            </form>
        )
    }
    
}
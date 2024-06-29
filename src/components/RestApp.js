import { Component } from "react";
import axios from 'axios';
const URL = 'https://jsonplaceholder.typicode.com/users'

export default class RestApp extends Component{

    state ={
        userData:[]
    }

    componentDidMount(){
        axios.get(URL)
            .then((res)=>{
                const json = JSON.stringify(res.data)
                localStorage.setItem('en',json)
            })
            .then((data)=>{
                const tdata= JSON.parse(localStorage.getItem('en'))

                this.setState(()=>{
                    return{
                        userData:tdata
                    }
                })
            })
    }
    render(){
        return(
            <div>
                {
                    this.state.userData.map((alldata)=>(
                        <div>
                            {alldata.name}---{alldata.email}
                        </div>
                    ))
                }
            </div>
        )
    }
}

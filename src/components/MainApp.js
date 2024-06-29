import { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Users from "./Users"; 
import AddUsers from "./AddUsers";


export default class MainApp extends Component{

    componentDidMount(){

        const json = localStorage.getItem('gfg')
        const userData = JSON.parse(json)
        if(userData){
            this.setState(()=>{
                return{
                    userData
                }
            })
        }

    }

    componentDidUpdate(){
        const json = JSON.stringify(this.state.userData)
        localStorage.setItem('gfg',json)
    }

    state ={
         heraderData:'Welcome to Header',
         footerData:'This is Footer',
         userData:[]
    }

    deleteAll = () =>{
        this.setState(()=>{
            return{
                userData:[]
            }
        })
    }

    deleteUser = (index) =>{
        
        
        this.setState((prevState)=>{
           return{
            //    userData: prevState.userData.splice(index,1)
           }
        })
    }

    addUser = (data) =>{
        this.setState((prevState)=>{
            return{
                userdata: prevState.userData.push(data)
            }
        })
        console.log(this.state.userData)
    }

    render(){
       
        return(
            <div>
            <Header hdata={this.state.heraderData}></Header>
            <Users userdata={this.state.userData} du={this.deleteUser} da={this.deleteAll} hasdata={this.state.userData.length}></Users>
            <p>MainApp</p>
            <AddUsers au={this.addUser}></AddUsers>
            <Footer fdata={this.state.footerData}></Footer>            
            </div>
        )
    }
    
}
import React from 'react'
import PersistentDrawerLeft from './../../components/navbar/navbar'
class Addstudent extends React.Component{
    constructor(){
        super()
        this.state ={

        }
    }
    async componentDidMount() {
        let login = localStorage.getItem("login")
        console.log(login)
        if (!login) {
            console.log(login)
            login = JSON.parse(login)
            this.props.history.push("/")

        }}
    render(){

        return(
            <div>
        <PersistentDrawerLeft history = {this.props.history}/>


            </div>
        )
    }
}


export default Addstudent
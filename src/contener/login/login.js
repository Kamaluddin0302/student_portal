import React from 'react'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {Firebase} from './../../config/firebase/firebase'
class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password : ''
        }
    }
    Getvalue = (e)=> {
        console.log(e)
        this.setState({
[e.target.name] : e.target.value
    
    })
}

login = () => {
alert("login")
    let {email, password} =this.state
    Firebase.database().ref('/').child("Adminlogin").on("value", snap => {
        let data = snap.val()
        if(email=== data.email && password === data.password){
            localStorage.setItem("login" , true)
            this.props.history.push("/home")
        }
    })
}
componentDidMount(){
    let login = localStorage.getItem("login")
    if(login){
        login = JSON.parse(login)
        this.props.history.push("home")

    }
}
    render() {
        console.log(this.state.email)
        return (


            <div >

                <Paper style={{ height: '350px', width: '700px', margin: '0 auto', marginTop: '80px', borderRadius: '10px' }}>

                    <h1 style={{ paddingTop: '20px' }}>Log in</h1>


                    <TextField
                        id="standard-Email-input"
                        label="Email"
                        type="text"
                        autoComplete="current-Email"
                        margin="Email"
                        style={{ width: '300px' }}
                        name = "email"
                        onChange = {(e)=> this.Getvalue(e)}
                    />

                    <br />
                    <br />



                    <TextField
                        id="standard-password-input"
                        label="password"
                        type="password"
                        autoComplete="current-password"
                        margin="password"
                        style={{ width: '300px' }}
                        name = "password"
                        onChange = {(e)=> this.Getvalue(e)}

                    />


                    <br />
                    {/* <br/> */}



                    <Button variant="contained" style={{ marginTop: '40px', color: 'white', backgroundColor: "#00c1a6" }} onClick = {()=> this.login()}>
                        Log in
      </Button>

                </Paper>
            </div>
        )
    }
}
export default Login
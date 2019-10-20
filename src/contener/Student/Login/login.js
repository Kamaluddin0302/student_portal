import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Logo from './../../../img/logo.jpg'
import Appbar from './../../../components/Student/Navbar/appbar'
import TextField from './../../../components/Student/TextField/textfield'
import Button from '@material-ui/core/Button';



class Login extends React.Component {

    constructor(){
        super()
        this.state = {
            Email: "",
            Password: "",
        }
    }
    GetStudentValue = (e,name)=> {
      this.setState({
          [name] : e.target.value,
      })
    }

    SaveData = ()=> {
    let flag = true
    for(var key in this.state) {
        if(this.state[key] === "") {
            flag = false
            alert("Please Fill " + key)
            break;
        }
    }
    if (flag === true){
            let StudentData = localStorage.getItem("StudentData")
            if(StudentData === null){
                StudentData = []
            } 
            else{
             StudentData = JSON.parse(StudentData)
            }
         for(var i = 0; i < StudentData.length; i++){
             if(StudentData[i].Email === this.state.Email && StudentData[i].Password === this.state.Password){
                 flag = false
                 localStorage.setItem("LoginStudent",JSON.stringify(this.state))
                 alert("Log in Successfully")
                 this.props.history.push("/student/dashboard")
             }
         }
         if(flag === true){
        alert("Please Enter Right Email Or Password")
         }
        }
    }    
    
    render() {
        return (
            <div>
                <Appbar />
                <br />
                <br />
                <br />
                <Grid container justify="center">
                    <Grid item xs={11} sm={10} md={6} lg={4}>
                        <Paper style={{ padding: 30 }}>
                            <img src={Logo} width="150" alt="Logo" />
                            <TextField label="Email" width='100%' onChange = {this.GetStudentValue}/>
                            <TextField label="Password"
                            onChange = {this.GetStudentValue}
                              width='100%'
                              type='password' />
                            <br/>
                            <Button variant="contained"
                                color="primary"
                                className="loginBtn"
                                onClick={this.SaveData}
                                style={{backgroundColor: 'darkcyan',width: '30%'}} >Login </Button>
                                
                               
                            <p className="font-small grey-text d-flex justify-content-end">
                                Not a member? &nbsp;
                    <span className="blue-text ml-1"
                    style={{cursor: 'pointer'}}
                    onClick={() => (this.props.history.push('/signup'))}>
                    Sign Up
                    </span>
                            </p>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Login;
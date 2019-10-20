import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Logo from './../../../img/logo.jpg'
import Appbar from './../../../components/Student/Navbar/appbar'
import TextField from './../../../components/Student/TextField/textfield'
import Button from '@material-ui/core/Button';
import {Firebase} from '../../../config/firebase/firebase'
class Login extends React.Component {

    constructor(){
        super()
        this.state = {
            Full_Name : "",
            Father_Name: "",
            Mobile_Number: "",
            Class_Name : "",
            Class_Name: "",
            Class_Name : "",
            Email: "",
            Password: "",
            Re_Password: ""
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
        if (this.state.Password !== this.state.Re_Password){
            alert("Please Conform the Password")
        }
        else{
            alert('')
            // alert("Sign Up Successfully")
            // let StudentData = localStorage.getItem("StudentData")
            // if(StudentData === null){
            //     StudentData = []
            // } 
            // else{
            //  StudentData = JSON.parse(StudentData)
            // }
            // StudentData.push(this.state)
            // localStorage.setItem("StudentData",JSON.stringify(StudentData))
            let studentData=this.state
            Firebase.firestore().collection("UserData").add(studentData).then(() =>{
                console.log("Document written with ID: ");
            })
            .catch((error)=> {
                console.error("Error adding document: ", error);
            });
        }
    }    
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <Appbar />
                <br />
                <br />
                <br />
                <Grid container justify="center">
                    <Grid item xs={11} sm={10} md={6} lg={4}>
                        <Paper style={{ padding: 30 }}>
                            <img src={Logo} width="150" alt="Logo"/>
                            <TextField label="Full_Name" width='100%' onChange = {this.GetStudentValue}/>
                            <TextField label="Father_Name" width='100%' onChange = {this.GetStudentValue}/>
                            <TextField label="Mobile_Number" type='number' width='100%' onChange = {this.GetStudentValue}/>
                            <TextField label="Class_Name"  type='number'  width='100%' onChange = {this.GetStudentValue}/>
                            <TextField label="Email" width='100%' onChange = {this.GetStudentValue}/>
                            <TextField label="Password" width='100%' type='password' onChange = {this.GetStudentValue}/>
                            <TextField label="Re_Password" width='100%' type='password' onChange = {this.GetStudentValue}/>
                            <br/>
                            <Button variant="contained"
                                color="primary"
                                className="loginBtn"
                                style={{
                                    backgroundColor: 'darkcyan',
                                    width: '30%'
                                }}
                                
                                onClick={this.SaveData}
                                >SignUp
                                </Button>
                                <p className="font-small grey-text d-flex justify-content-end">
                                
      Already have Account? &nbsp;
                <span className="blue-text ml-1" 
                style={{cursor:'pointer'}}
                onClick={() => (this.props.history.push('/'))}>
                        Login
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
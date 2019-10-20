import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Logo from './../../../img/logo.jpg'
import Appbar from './../../../components/Student/Navbar/appbar'
import TextField from './../../../components/Student/TextField/textfield'
import Button from '@material-ui/core/Button';
import Radio from './../../../components/Student/RadioBtn/radioBtn'



class Login extends React.Component {
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
                            <img src={Logo} width="150" alt="Logo"/>
                            <TextField label="Full Name" width='100%' />
                            <TextField label="Father Name" width='100%' />
                            <TextField label="Class"  width='100%' />
                            <TextField type="file"  width='100%' />
                            <TextField label="Father Cnic" type='number' width='100%' />
                            <TextField label="Father Mobile Number" type='number' width='100%' />
                            <TextField label="City" width='100%' />
                            <TextField label="District" width='100%' />
                            <TextField label="Father Ocupation" width='100%' />
                                                      
                            <br/>
                            <Button variant="contained"
                                color="primary"
                                className="loginBtn"
                                style={{
                                    backgroundColor: 'darkcyan',
                                    width: '30%'
                                }} >Submit
                                </Button>
                      </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Login;
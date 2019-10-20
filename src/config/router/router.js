import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Home, Login, Student_data,Addstudent,
// student
Login_S,Signup_S, Dashboard_S,Form_S

} from '../../contener'

function AppRouter() {
    return (
        <div>
      <Router>
          <Route path="/" exact component={Login} />
          {/* <Route path="/about/" component={About} /> */}
          <Route path="/home" component={Home} />
          <Route path = '/student_data' component={Student_data}/>
          <Route path = '/addstudent' component={Addstudent}/>




           {/* student_data */}

                     <Route exact path="/student/" component={Login_S} />
                    <Route path="/student/signup" component={Signup_S} />
                    <Route path="/student/dashboard" component={Dashboard_S} />
                    <Route path="/student/form" component={Form_S} />
      </Router>
      </div>
    );
  }
  
  export default AppRouter;
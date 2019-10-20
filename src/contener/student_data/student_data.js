import React from 'react';
import PersistentDrawerLeft from '../../components/navbar/navbar'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


class Student_data extends React.Component {

  constructor(){
    super()
    this.state = {

    }
  }
  async componentDidMount() {
    let login = localStorage.getItem("login")
    console.log(login)
    if (!login) {
        console.log(login)
        login = JSON.parse(login)
        this.props.history.push("/")
    }


}
  render(){
  return (
    <div className="App">

<PersistentDrawerLeft history = {this.state.history}/>

      <Paper style={{ height: '750px', width: '850px', margin: '0 auto', marginTop: '20px' }}>
        <div style={{ display: 'inline-block', }}>

          <span style={{ color: 'green', fontSize: '30px', fontWeight: 'bold', marginTop: '20px', marginLeft: '20px' }}>Student,detail</span>
          <br />
          <i style={{ marginLeft: '20px' }} >Student Number:00011/2013/</i>
        </div>
        <div style={{ float: 'right', }}>
          <span style={{ color: 'green', fontSize: '30px', fontWeight: 'bold', marginTop: '20px', marginLeft: '20px' }}>Student,Portal</span>
          <br />
          <i style={{ marginLeft: '20px' }} >Student Number</i>
        </div>
        <hr />
        <div>
          <div style={{ border: '1 px solid' }}>
            <span style={{ marginLeft: '300px', fontSize: '20px', fontWeight: 'bold', borderBottom: '2px solid green', borderTop: '2px solid green', color: 'green' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       2013/2014- Second Querter &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <br />
            <i style={{ float: 'right', marginRight: '30px' }} >Student Number</i>
          </div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaBhnX0bqgES_3e582Ao1hE8Ppyemm58FfZetG2Z9_aHH_Wi_z' style={{ marginLeft: '20px', display: 'inline-block', height: '200px' }} width='150px' />
          {/* <div style={{float:"right",border:'1px solid',width:'500px',height:'350px',marginBottom:'50px',marginTop:'30px'}}>
 <span style={{color:'gray',display:'inline-block',marginLeft:'20px'}}>Grade</span>
<span style={{marginLeft:'30px'}}>
 <span style={{color:'gray',marginBottom:'20px'}}>Thar </span> <br/>
<span style={{display:'inline-block',fontWeight:'bold'}}>1st Grade</span>
</span>
<span style={{display:'inline-block',marginLeft:'300px',fontWeight:'bold'}}>1st Grade</span>

</div> */}

          <div style={{ float: "right", width: '400px', height: '200px', marginBottom: '50px', marginTop: '30px' }}>
            <table>
              <tr>
                <td style={{ color: 'gray', width: '80%' }}>Great</td>
                <td style={{ color: 'gray' }}>Gander</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>1st Grade</td>
                <td style={{ fontWeight: 'bold' }}>Female</td>
              </tr>
              <tr>
                <td style={{ color: 'gray', width: '80%' }}>Great</td>
                <td style={{ color: 'gray' }}>Gander</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>1st Grade</td>
                <td style={{ fontWeight: 'bold' }}>Female</td>
              </tr> <tr>
                <td style={{ color: 'gray', width: '80%' }}>Great</td>
                <td style={{ color: 'gray' }}>Gander</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>1st Grade</td>
                <td style={{ fontWeight: 'bold' }}>Female</td>
              </tr> <tr>
                <td style={{ color: 'gray', width: '80%' }}>Great</td>
                <td style={{ color: 'gray' }}>Gander</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>1st Grade</td>
                <td style={{ fontWeight: 'bold' }}>Female</td>
              </tr>
            </table>
          </div>

        </div>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h5 style={{ marginLeft: '20px' }}>Parents Details</h5>
          <hr />
          <span style={{ marginLeft: '20px', fontWeight: 'bold' }}>My Father</span>
          <br />
          <span style={{ marginLeft: '20px' }}>Father/Padro</span>
          <div style={{ float: "right", width: '400px', height: '200px', marginBottom: '50px', marginTop: '30px', marginRight: '150px' }}>
            <table>
              <tr>
                <td style={{ color: 'gray', width: '80%' }}>Great</td>
                <td style={{ color: 'gray' }}>Gander</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>1st Grade</td>
                <td style={{ fontWeight: 'bold' }}>Female</td>
              </tr>
              <tr>
                <td style={{ color: 'gray', width: '80%' }}>Great</td>
                <td style={{ color: 'gray' }}>Gander</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>1st Grade</td>
                <td style={{ fontWeight: 'bold' }}>Female</td>
              </tr> <tr>
                <td style={{ color: 'gray', width: '80%' }}>Great</td>
                <td style={{ color: 'gray' }}>Gander</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>1st Grade</td>
                <td style={{ fontWeight: 'bold' }}>Female</td>
              </tr>

            </table>
          </div>


        </div>


      </Paper>
    </div>

  );
}
}
export default Student_data;
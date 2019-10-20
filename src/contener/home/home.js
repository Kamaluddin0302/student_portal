import React from 'react'
import Paper from '@material-ui/core/Paper';
import PersistentDrawerLeft from './../../components/navbar/navbar'
import './home.css'
import Grid from '@material-ui/core/Grid';
import Calendar from 'react-calendar-material';



export default class Home extends React.Component {
    constructor() {
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
    render() {
        console.log(this.props)
        return (
            <div>
                <PersistentDrawerLeft history={this.props.history} />
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Paper className='paper'>
                            <Grid container justify="center" spacing={0}>
                                <Grid item xs={12} sm={12} md={6} lg={3}>
                                    <Paper className='nested_paper1'>
                                        <div>
                                            <img src='https://image.flaticon.com/icons/svg/67/67902.svg' className='paper_img_1' />
                                            <h1>Total Student</h1>
                                            <h1>1200</h1>
                                        </div>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={3}>
                                    <Paper className='nested_paper1'>

                                        <div style={{ marginLeft: '20%' }}>
                                            <img src='https://image.flaticon.com/icons/svg/2/2123.svg' className='paper_img_2' />
                                            <h1>Total attendance</h1>
                                            <h1>1140</h1>
                                        </div>


                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={3}>
                                    <Paper className='nested_paper1'>

                                        <div style={{ marginLeft: '20%' }}>
                                            <img src='https://image.flaticon.com/icons/svg/42/42930.svg' className='paper_img_3' />
                                            <h1>Total Classes</h1>
                                            <h1>07</h1>
                                        </div>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={3}>
                                    <Paper className='nested_paper1'>
                                        <div style={{ marginLeft: '20%' }}>
                                            <img src='https://image.flaticon.com/icons/svg/42/42912.svg' className='paper_img_4' />
                                            <h1>Total Teachers</h1>
                                            <h1>20</h1>
                                        </div></Paper>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <div>
                    <Calendar />
                </div>
            </div>
        )
    }
}
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export default function OutlinedTextFields(props) {
  const classes = useStyles();
  

  

  return (
    <form className={classes.container} noValidate autoComplete="off">
        <TextField
        id="outlined-dense"
        label={props.label}
        className={clsx(classes.textField, classes.dense)}
        style={{width:props.width}}
        margin="dense"
        variant="outlined"
        type={props.type}
        onChange = {(e)=>props.onChange(e,props.label)}
      />
        
     
    </form>
  );
}
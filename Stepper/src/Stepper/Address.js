import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function User() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    city: '',
    state: '',
    pincode: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off" style={{paddingLeft:200}}>
      <div>
        <TextField required id="standard-required" label="City" value={values.city} onChange={handleChange("city")}/><br/>
        <TextField required id="standard-required" label="state"  value={values.state} onChange={handleChange("state")} /><br/>
        <TextField required id="standard-required" label="Pincode" value={values.pincode} onChange={handleChange("pincode")} /><br/>
      </div>
    </form>
  );
}
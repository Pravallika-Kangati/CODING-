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
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phoneNo: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off" style={{paddingLeft:200}}>
      <div>
        <TextField required id="standard-required" label="First Name" value={values.firstName} onChange={handleChange("firstName")}/><br/>
        <TextField id="standard-required" label="Middle Name (optional)"  value={values.middleName} onChange={handleChange("middleName")} /><br/>
        <TextField required id="standard-required" label="Last Name" value={values.lastName} onChange={handleChange("lastName")} /><br/>
        <TextField required id="standard-required" label="Email Id" value={values.email} onChange={handleChange("email")}/><br/>
        <TextField required id="standard-required" label="Phone Number" value={values.phoneNo} onChange={handleChange("phoneNo")}/><br/>
      </div>
    </form>
  );
}
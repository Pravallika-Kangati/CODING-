import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from "@material-ui/core/Button";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

// Destructure props
const User = ({
  handleNext,
  handleChange,
  values: { firstName, lastName, email, gender,file },
  filedError,
  isError
}) => {
  // Check if all values are not empty
  const classes = useStyles();
  const isEmpty =
    firstName.length > 0 &&
    lastName.length > 0 &&
    gender.length > 0 &&
    email.length > 0;

  return (
    <Fragment>
      <form className={classes.root} noValidate autoComplete="off" style={{paddingLeft:200}}>
        <div>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            placeholder="Your first name"
            defaultValue={firstName}
            onChange={handleChange("firstName")}
            margin="normal"
            error={filedError.firstName !== ""}
            helperText={
              filedError.firstName !== "" ? `${filedError.firstName}` : ""
            }
            required
          />
        </div><br/>
        <div>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            placeholder="Your last name"
            defaultValue={lastName}
            onChange={handleChange("lastName")}
            margin="normal"
            error={filedError.lastName !== ""}
            helperText={
              filedError.lastName !== "" ? `${filedError.lastName}` : ""
            }
            required
          />
        </div><br/>

        <div>
          <TextField
            fullWidth
            label="Email"
            name="email"
            placeholder="Your email address"
            type="email"
            defaultValue={email}
            onChange={handleChange("email")}
            margin="normal"
            error={filedError.email !== ""}
            helperText={filedError.email !== "" ? `${filedError.email}` : ""}
            required
          />
        </div><br/>
        <div>
          <FormControl component="fieldset">
            <FormLabel>Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender" defaultValue={gender} onChange={handleChange("gender")}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
           </FormControl><br/>
            {/* <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                Upload
              </Button>
            </label> */}
            <TextField name="upload-photo" type="file" defaultValue={file} onChange={handleChange("file")}/>
        </div>
      </form><br/>
      <div
        style={{ display: "flex", paddingLeft:200 }}
      >
        <Button
          variant="contained"
          disabled={!isEmpty || isError}
          color="primary"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </Fragment>
  )
}

export default User;




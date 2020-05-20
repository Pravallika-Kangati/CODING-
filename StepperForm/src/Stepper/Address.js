import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
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
const Address = ({
  handleNext,
  handleBack,
  handleChange,
  values: { date, phone, city },
  filedError,
  isError
}) => {
  // Check if all values are not empty
  const classes = useStyles();
  const isEmpty = date.length > 0 && city.length > 0
  return (
    <Fragment>
      <form className={classes.root} noValidate autoComplete="off" style={{paddingLeft:200}}>
        <div>
          <TextField
            fullWidth
            label="City"
            name="city"
            placeholder="Enter your city"
            defaultValue={city}
            onChange={handleChange("city")}
            margin="normal"
            error={filedError.city !== ""}
            helperText={filedError.city !== "" ? `${filedError.city}` : ""}
            required
          />
        </div>
        <div>
          <TextField
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            label="Date of birth"
            name="birthday"
            type="date"
            defaultValue={date}
            onChange={handleChange("date")}
            margin="normal"
            required
          />
        </div>
        <div>
          <TextField
            fullWidth
            label="Phone number"
            name="phone"
            placeholder="e.g : xxx-xxx-xxxx"
            defaultValue={phone}
            onChange={handleChange("phone")}
            margin="normal"
            error={filedError.phone !== ""}
            helperText={filedError.phone !== "" ? `${filedError.phone}` : ""}
          />
        </div>
      </form><br/>
      <div
        style={{ display: "flex", paddingLeft:200 }}
      >
        <Button
          variant="contained"
          color="default"
          onClick={handleBack}
          style={{ marginRight: 20 }}
        >
          Back
        </Button>
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

export default Address;

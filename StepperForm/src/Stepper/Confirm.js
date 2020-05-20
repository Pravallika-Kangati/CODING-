import React, { Fragment } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
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
const Confirm = ({
  handleNext,
  handleBack,
  values: { firstName, lastName, email, gender,file, date, phone, city }
}) => {
    const classes = useStyles();
  return (
    <Fragment>
      <List className={classes.root} style={{paddingLeft:200}}>
        <ListItem>
          <ListItemText primary="First Name" secondary={firstName} />
        </ListItem>

        <ListItem>
          <ListItemText primary="Last Name" secondary={lastName} />
        </ListItem>

        <ListItem>
          <ListItemText primary="Email Address" secondary={email} />
        </ListItem> 

        <ListItem>
          <ListItemText primary="Gender" secondary={gender} />
        </ListItem>

        <ListItem>
          <ListItemText primary="Uploaded File" secondary={file} />
        </ListItem>

        <ListItem>
          <ListItemText primary="Date of birth" secondary={date} />
        </ListItem>

        <ListItem>
          <ListItemText primary="City" secondary={city} />
        </ListItem>

        <ListItem>
          <ListItemText
            primary="phone"
            secondary={phone.length > 0 ? phone : "Not Provided"}
          />
        </ListItem>
      </List>

      <div
        style={{ display: "flex", paddingLeft:200}}
      >
        <Button variant="contained" color="default" onClick={handleBack}>
          Back
        </Button>
        <Button
          style={{ marginLeft: 20 }}
          variant="contained"
          color="secondary"
          onClick={handleNext}
        >
          Confirm & Continue
        </Button>
      </div>
    </Fragment>
  )
}

export default Confirm;
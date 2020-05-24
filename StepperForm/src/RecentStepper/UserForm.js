import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from "@material-ui/core/Button";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import withStyles from '@material-ui/core/styles/withStyles';
import blue from "@material-ui/core/colors/blue";
import PropTypes from 'prop-types';
import {DropzoneArea} from 'material-ui-dropzone';

const useStyles = theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(0.25),
        width: '25ch',
      },
    },
    input: {
        display: "none"
    },
    button: {
        color: blue[900],
        margin: 10
    }
});
class UserForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        const { classes } = this.props
        return(
            <Fragment>
                <form className={classes.root} noValidate autoComplete="off" >
                    <div>
                        <TextField
                            fullWidth
                            label="First Name"
                            name="firstName"
                            placeholder="Your first name"
                            defaultValue={this.props.userFields.firstName}
                            onChange={this.props.handleChange}
                            margin="normal"
                            required
                        />
                    </div><br/>
                    <div>
                        <TextField
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            placeholder="Your last name"
                            defaultValue={this.props.userFields.lastName}
                            onChange={this.props.handleChange}
                            margin="normal"
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
                            defaultValue={this.props.userFields.email}
                            onChange={this.props.handleChange}
                            margin="normal"
                            required
                        />
                    </div><br/>
                    <div>
                        <FormControl component="fieldset">
                            <FormLabel>Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender" defaultValue={this.props.userFields.gender} onChange={this.props.handleChange}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                    </div><br/>
                    <div>
                        <TextField
                            fullWidth
                            label="Phone number"
                            name="phone"
                            placeholder="e.g : xxx-xxx-xxxx"
                            defaultValue={this.props.userFields.phone}
                            onChange={this.props.handleChange}
                            margin="normal"
                        />
                    </div><br/>
                    <div>
                    <label htmlFor="contained-button-file" style={{fontWeight:"bold"}}>
                        Upload File
                    </label> <br/>  
                    <DropzoneArea style={{height:"10px"}}
                        onChange={this.props.handleChangeFile}
                    />
                    </div>
                </form>
            </Fragment>
        )
    }
}
UserForm.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(UserForm);
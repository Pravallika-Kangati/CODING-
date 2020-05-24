import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


const useStyles = theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(0.1),
        width: '25ch',
      },
    }
});
class AddressForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        const { classes } = this.props;
        return(
            <Fragment>
                <form className={classes.root} noValidate autoComplete="off" >
                    <div>
                        <label htmlFor="contained-button-file" style={{fontWeight:"bold"}}>
                            Address
                        </label> <br/>
                        <TextareaAutosize  
                        aria-label="minimum height" 
                        rowsMin={3} placeholder="Enter your Address" 
                        defaultValue={this.props.addressFields.address}
                        onChange={this.props.handleChangeAddress}
                        margin="normal"
                        required/>
                    </div><br/>
                    <div>
                        <TextField
                            fullWidth
                            label="City"
                            name="city"
                            placeholder="Enter Your City"
                            defaultValue={this.props.addressFields.city}
                            onChange={this.props.handleChangeAddress}
                            margin="normal"
                            required
                        />
                    </div><br/>

                    <div>
                        <TextField
                            fullWidth
                            label="State"
                            name="state"
                            placeholder="Enter Your State"
                            defaultValue={this.props.addressFields.state}
                            onChange={this.props.handleChangeAddress}
                            margin="normal"
                            required
                        />
                    </div><br/>
                    <div>
                        <TextField
                            fullWidth
                            label="Pincode"
                            name="pincode"
                            type="number"
                            placeholder="e.g : xxxxxx"
                            defaultValue={this.props.addressFields.pincode}
                            onChange={this.props.handleChangeAddress}
                            margin="normal"
                        />
                    </div><br/>
                   
                </form>
            </Fragment>
        )
    }
}
AddressForm.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(AddressForm);
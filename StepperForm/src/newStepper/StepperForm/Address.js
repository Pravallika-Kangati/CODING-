import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

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
	values: { address,city,state,pincode },
	filedError,
	isError,
}) => {
	// Check if all values are not empty
	const classes = useStyles();
	const isEmpty =  city.length > 0 && address.length > 0 && state.length > 0 && pincode.length > 0;
	return (
		<Fragment>
			<form
				className={classes.root}
				noValidate
				autoComplete='off'
				style={{ paddingLeft: 30 }}>
				<div>
                        <label htmlFor="contained-button-file" style={{fontWeight:"bold"}}>
                            Address
                        </label> <br/>
                        <TextareaAutosize  
                        aria-label="minimum height" 
                        rowsMin={3} placeholder="Enter your Address" 
                        defaultValue={address}
                        onChange={handleChange('address')}
                        margin="normal"
                        error={filedError.address !== ''}
						helperText={filedError.address !== '' ? `${filedError.address}` : ''}
						required/>
                    </div><br/>
                    <div>
                        <TextField
                            fullWidth
                            label="City"
                            name="city"
                            placeholder="Enter Your City"
                            defaultValue={city}
                            onChange={handleChange('city')}
                            margin="normal"
                            error={filedError.city !== ''}
							helperText={filedError.city !== '' ? `${filedError.city}` : ''}
							required
                        />
                    </div><br/>

                    <div>
                        <TextField
                            fullWidth
                            label="State"
                            name="state"
                            placeholder="Enter Your State"
                            defaultValue={state}
                            onChange={handleChange('state')}
                            margin="normal"
                            error={filedError.state !== ''}
							helperText={filedError.state !== '' ? `${filedError.state}` : ''}
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
                            defaultValue={pincode}
                            onChange={handleChange('pincode')}
							margin="normal"
							error={filedError.pincode !== ''}
							helperText={filedError.city !== '' ? `${filedError.pincode}` : ''}
							required
                        />
                    </div><br/>
			</form>
			<br />
			<div style={{ display: 'flex', paddingLeft: 30 }}>
				<Button
					variant='contained'
					color='default'
					onClick={handleBack}
					style={{ marginRight: 20 }}>
					Back
				</Button>
				<Button
					variant='contained'
					disabled={!isEmpty || isError}
					color='primary'
					onClick={handleNext}>
					Next
				</Button>
			</div>
		</Fragment>
	);
};

export default Address;

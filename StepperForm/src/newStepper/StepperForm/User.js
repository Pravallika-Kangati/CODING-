import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import { DropzoneArea } from 'material-ui-dropzone';
import Dropzone from "react-dropzone";
import FileUploadInput from './FileUploadInput';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '30ch',
		},
	},
}));

// Destructure props
const User = ({
	handleNext,
	handleChange,
	handleChangeFile,
	values: { firstName, lastName, email, gender, date, phone},
	files: {fileNames},
	filedError,
	isError,
}) => {
	// Check if all values are not empty
	const classes = useStyles();
	const isEmpty =
		firstName.length > 0 &&
		lastName.length > 0 &&
		gender.length > 0 &&
		email.length > 0 && 
		date.length > 0 &&
		phone.length > 0;

	return (
		<Fragment>
			<form
				className={classes.root}
				noValidate
				autoComplete='off'
				style={{ paddingLeft: 30 }}>
				<div>
					<TextField
						fullWidth
						label='First Name'
						name='firstName'
						placeholder='Your first name'
						defaultValue={firstName}
						onChange={handleChange('firstName')}
						margin='normal'
						error={filedError.firstName !== ''}
						helperText={
							filedError.firstName !== '' ? `${filedError.firstName}` : ''
						}
						required
					/>
				</div>
				<br />
				<div>
					<TextField
						fullWidth
						label='Last Name'
						name='lastName'
						placeholder='Your last name'
						defaultValue={lastName}
						onChange={handleChange('lastName')}
						margin='normal'
						error={filedError.lastName !== ''}
						helperText={
							filedError.lastName !== '' ? `${filedError.lastName}` : ''
						}
						required
					/>
				</div><br />
				<div>
					<TextField
						fullWidth
						label='Email'
						name='email'
						placeholder='Your email address'
						type='email'
						defaultValue={email}
						onChange={handleChange('email')}
						margin='normal'
						error={filedError.email !== ''}
						helperText={filedError.email !== '' ? `${filedError.email}` : ''}
						required
					/>
				</div>
				<br />
				<div>
					<FormControl component='fieldset'>
						<FormLabel>Gender</FormLabel>
						<RadioGroup
							aria-label='gender'
							name='gender'
							defaultValue={gender}
							onChange={handleChange('gender')}>
							<FormControlLabel
								value='female'
								control={<Radio />}
								label='Female'
							/>
							<FormControlLabel value='male' control={<Radio />} label='Male' />
						</RadioGroup>
					</FormControl>
				</div>
				<div>
					<TextField
						fullWidth
						label="Phone number"
						name="phone"
						placeholder="e.g : xxx-xxx-xxxx"
						defaultValue={phone}
						onChange={handleChange('phone')}
						margin="normal"
						error={filedError.phone !== ''}
						helperText={filedError.phone !== '' ? `${filedError.phone}` : ''}
						required
					/>
                </div>
				<div>
					<TextField 
					fullWidth 
					label="Date of Birth*" 
					name="date" 
					type="date"
					placeholder="00/00/0000"
					InputLabelProps={{ shrink: true,}} 
					defaultValue={date}
					onChange={handleChange('date')} 
					margin="normal"
					></TextField>
				</div>
				<div>
					<FileUploadInput />
							{/* <label htmlFor="fileNames">{fileNames}</label>
					<br />
					<TextField
						id="fileNames"
						type="file" fullWidth margin="normal"
						name="selectedFile"
						variant="outlined"
						onChange={event=>handleChangeFile(event)}
					/> */}
					{/* <label htmlFor='contained-button-file' style={{ fontWeight: 'bold' }}>
						Upload File
					</label>
					<br />
					<DropzoneArea name="fileNames" defaultValue={fileNames} type="file"
						style={{ height: '10px', width: '30%' }}
						onChange={handleChangeFile}
					/> */}
				</div>
			</form>
			<br />
			<div style={{ display: 'flex', paddingLeft: 130 }}>
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

export default User;

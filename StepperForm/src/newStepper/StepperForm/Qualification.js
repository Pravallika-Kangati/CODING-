import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

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
	handleBack,
	values: { education, course, specialization, university, courseType },
}) => {
	// Check if all values are not empty
	const classes = useStyles();
	const isEmpty =
		education.length > 0 &&
		course.length > 0 &&
		specialization.length > 0 &&
		university.length > 0;

	return (
		<Fragment>
			<form
				className={classes.root}
				noValidate
				autoComplete='off'
				style={{ paddingLeft: 30 }}>
				<div>
					{/*<TextField
						fullWidth
						label='Education'
						name='education'
						placeholder='Your education'
						defaultValue={education}
						onChange={handleChange('education')}
						margin='normal'
						required
					/> */}
					<TextField
						id='select'
						label='Education'
						value={education}
						onChange={handleChange('education')}
						select>
						<MenuItem value='Diploma'>Diploma</MenuItem>
						<MenuItem value='Graduation'>Graduation</MenuItem>
						<MenuItem value='Masters'>Masters</MenuItem>
					</TextField>
				</div>
				<br />
				<div>
					<TextField
						id='select'
						label='Course'
						value={course}
						onChange={handleChange('course')}
						select>
						<MenuItem value='B.Tech/B.E.'>B.Tech/B.E.</MenuItem>
						<MenuItem value='B.Com'>B.Com</MenuItem>
						<MenuItem value='B.Arch'>B.Arch</MenuItem>
						<MenuItem value='MBBS'>MBBS</MenuItem>
						<MenuItem value='LLB'>LLB</MenuItem>
					</TextField>
				</div>
				<br />

				<div>
					<TextField
						fullWidth
						label='Specialization'
						name='specialization'
						placeholder='Your Specialization'
						defaultValue={specialization}
						onChange={handleChange('specialization')}
						margin='normal'
						required
					/>
				</div>
				<br />
				<div>
					<TextField
						fullWidth
						label='University/College'
						name='university'
						placeholder='Your university'
						defaultValue={university}
						onChange={handleChange('university')}
						margin='normal'
						required
					/>
				</div>
				<br />
				<div>
					<FormControl component='fieldset'>
						<FormLabel>Course Type</FormLabel>
						<RadioGroup
							aria-label='courseType'
							name='courseType'
							defaultValue={courseType}
							onChange={handleChange('courseType')}>
							<FormControlLabel
								value='fullTime'
								control={<Radio />}
								label='Full-Time'
							/>
							<FormControlLabel
								value='Distance'
								control={<Radio />}
								label='Distance Learning'
							/>
						</RadioGroup>
					</FormControl>
					<br />
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
				</div>
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
					disabled={!isEmpty}
					color='primary'
					onClick={handleNext}>
					Next
				</Button>
			</div>
		</Fragment>
	);
};

export default User;

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Typography from '@material-ui/core/Typography';
import User from './User';
import Address from './Address';
import Confirm from './Confirm';
import SuccessForm from './SuccessForm';
import Qualifications from './Qualification';

const emailRegex = RegExp(/^[^@]+@[^@]+\.[^@]+$/);
const phoneRegex = RegExp(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4,6})$/);

const useStyles = makeStyles((theme) => ({
	root: {
		width: '70%',
		marginTop : theme.spacing(2),
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	button: {
		marginRight: theme.spacing(1),
	},
	completed: {
		display: 'inline-block',
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
}));

function getSteps() {
	return ['User Information', 'Qualifications', 'Address', 'Confirmation'];
}

export default function StepperForm() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const [completed, setCompleted] = React.useState({});
	const [fields, setFields] = useState({
		firstName: '',
		lastName: '',
		email: '',
		gender: '',
		date: '',
		address:'',
		city: '',
		state:'',
		pincode:'',
		phone: '',
		education: '',
		course: '',
		specialization: '',
		university: '',
		courseType: '',
	});
	const [fileNames, setFileNames] = useState('');
	const handleChangeFile = e => {
		switch (e) {
		  case "selectedFile":
			if (e.fileNames.length > 0) {
				setFileNames(
				e.filesNames[0].name,
	
				console.log("The Uploaded File is", e.filesNames[0])
			  );
			}
			break;
		  default:
			setFileNames( e );
		}
	  };
	// const handleChangeFile = (event) =>
    // setFileNames(URL.createObjectURL(event.target.files[0]));


	// Copy fields as they all have the same name
	const [filedError, setFieldError] = useState({
		...fields,
	});

	const [isError, setIsError] = useState(false);
	const steps = getSteps();

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};
	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStep = (step) => () => {
		setActiveStep(step);
	};

	const handleChange = (input) => ({ target: { value } }) => {
		// Set values to the fields
		setFields({
			...fields,
			[input]: value,
		});
		// Handle errors
		const formErrors = { ...filedError };
		const lengthValidate = value.length > 0 && value.length < 3;

		switch (input) {
			case 'firstName':
				formErrors.firstName = lengthValidate
					? 'Minimum 3 characaters required'
					: '';
				break;
			case 'lastName':
				formErrors.lastName = lengthValidate
					? 'Minimum 3 characaters required'
					: '';
				break;
			case 'email':
				formErrors.email = emailRegex.test(value)
					? ''
					: 'Invalid email address';
				break;
			case 'phone':
				formErrors.phone = phoneRegex.test(value)
					? ''
					: 'Please enter a valid phone number. i.e: xxx-xxx-xxxx';
				break;
			case 'address':
				formErrors.address = lengthValidate
					? 'Minimum 3 characaters required'
					: '';
				break;
			case 'city':
				formErrors.city = lengthValidate
					? 'Minimum 3 characaters required'
					: '';
				break;
			case 'state':
				formErrors.state = lengthValidate
					? 'Minimum 3 characaters required'
					: '';
				break;
			case 'pincode':
				formErrors.pincode = value.length >0 && value.length === 6
					? 'Length should be 6 required'
					: '';
				break;
			default:
				break;
		}

		// set error hook
		Object.values(formErrors).forEach((error) =>
			error.length > 0 ? setIsError(true) : setIsError(false)
		);
		// set errors hook
		setFieldError({
			...formErrors,
		});
	};
	function getStepContent(step) {
		switch (step) {
			case 0:
				return (
					<User
						handleNext={handleNext}
						handleChange={handleChange}
						handleChangeFile={handleChangeFile}
						values={fields}
						files={fileNames}
						isError={isError}
						filedError={filedError}
					/>
				);
			case 1:
				return (
					<Qualifications
						handleNext={handleNext}
						handleChange={handleChange}
						handleBack={handleBack}
						values={fields}
					/>
				);
			case 2:
				return (
					<Address
						handleNext={handleNext}
						handleBack={handleBack}
						handleChange={handleChange}
						values={fields}
						isError={isError}
						filedError={filedError}
					/>
				);
			case 3:
				return (
					<Confirm
						handleNext={handleNext}
						handleBack={handleBack}
						values={fields}
						files={fileNames}
					/>
				);
			default:
				break;
		}
	}
	return (
		<div className={classes.root}>
			<Stepper nonLinear activeStep={activeStep}>
				{steps.map((label, index) => (
					<Step key={label}>
						<StepButton
							onClick={handleStep(index)}
							completed={completed[index]}>
							{label}
						</StepButton>
					</Step>
				))}
			</Stepper>
			<div>
				{steps.length === activeStep ? (
					<div>
						<Typography className={classes.instructions}>
							<SuccessForm />
						</Typography>
					</div>
				) : (
					<div>
						<Typography className={classes.instructions}>
							{getStepContent(activeStep)}
						</Typography>
					</div>
				)}
			</div>
		</div>
	);
}

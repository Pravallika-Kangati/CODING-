import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import UserForm from './UserForm';

const useStyles = theme => ({
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
});


class StepperForm extends React.Component {
    constructor() {
        super();
        this.state = {
            activeStep : 0,
            completed : {},
            userFields:{
                firstName: "",
                lastName: "",
                email: "",
                gender: "",
                date: "",
                phone: "",
                files: []
            },
            errors:{}
        }
    }

    handleChange =  (event) => {
        // Set values to the fields
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ ...this.state.userFields, [name]: value });
    }

    handleChangeFile = (files)=> (event) =>{
        const name = event.target.name;
        this.setState({...this.state.userFields, [name]: files});
    }

    getSteps = () => {
        return ['User Information', 'Qualifications', 'Address','Confirmation'];
    }

    getStepContent = (step) => {
        switch (step) {
            case 0:
                return <UserForm userFields={this.state.userFields} handleChange={this.handleChange} handleChangeFile={this.handleChangeFile}/>;
            case 1:
                return 'Step 2: User Qualifications';
            case 2:
                return 'Step 3: User Address';
            case 3:
                return 'Step 4: User Details View and Confirmation';
            default:
                break;
        }
    }

    totalSteps = () => {
        return this.getSteps().length;
    }
    
    completedSteps = () => {
        return Object.keys(this.state.completed).length;
    }
    
    isLastStep = () => {
        return this.state.activeStep === this.totalSteps() - 1;
    }
    
    allStepsCompleted = () => {
        return this.completedSteps() === this.totalSteps();
    }

    handleNext = () => {
        const newActiveStep =
          this.isLastStep() && !this.allStepsCompleted()
            ? // It's the last step, but not all steps have been completed,
              // find the first step that has been completed
              this.getSteps().findIndex((step, i) => !(i in this.state.completed))
            : this.state.activeStep + 1;
            this.setState({activeStep : newActiveStep});
        
    }
    
    handleBack = () => {
        const prevActiveStep = this.state.activeStep - 1;
        this.setState({activeStep: prevActiveStep});
        
    }
    
    handleStep = (step) => () => {
        this.setState({activeStep : step});
    }
    
    handleComplete = () => {
        const newCompleted = this.state.completed;
        newCompleted[this.state.activeStep] = true;
        this.setState({completed: newCompleted});
        this.handleNext();
    }
    
    handleReset = () => {
        this.setState({activeStep : 0, completed: {}});
    }

   
    

    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <Stepper nonLinear activeStep={this.state.activeStep}>
                    {this.getSteps().map((label, index) => (
                    <Step key={label}>
                        <StepButton onClick={this.handleStep(index)} completed={this.state.completed[index]}>
                        {label}
                        </StepButton>
                    </Step>
                    ))}
                </Stepper>
                <div>
                    {this.allStepsCompleted() ? (
                    <div>
                        <Typography className={classes.instructions}>
                        All steps completed - you&apos;re finished
                        </Typography>
                        <Button onClick={this.handleReset}>Reset</Button>
                    </div>
                    ) : (
                    <div>
                        <Typography className={classes.instructions}>{this.getStepContent(this.state.activeStep)}</Typography>
                        <div>
                        <Button disabled={this.state.activeStep === 0} onClick={this.handleBack} className={classes.button}>
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleNext}
                            className={classes.button}
                        >
                            Next
                        </Button>
                        {this.state.activeStep !== this.getSteps().length &&
                            (this.state.completed[this.state.activeStep] ? (
                            <Typography variant="caption" className={classes.completed}>
                                Step {this.state.activeStep + 1} already completed
                            </Typography>
                            ) : (
                            <Button variant="contained" color="primary" onClick={this.handleComplete}>
                                {this.completedSteps() === this.totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                            </Button>
                            ))}
                        </div>
                    </div>
                    )}
                </div>
            </div>

        )
    }
}

StepperForm.propTypes = {
    classes: PropTypes.object.isRequired,
}


export default withStyles(useStyles)(StepperForm);
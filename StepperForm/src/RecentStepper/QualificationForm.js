import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

const useStyles = theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(0.1),
        width: '25ch',
      },
    }
});
class QualificationForm extends React.Component {
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
                        <TextField
                            fullWidth
                            label="Occupation"
                            name="occupation"
                            placeholder="Enter Your Occupation"
                            defaultValue={this.props.qualificationFields.occupation}
                            onChange={this.props.handleChangeQualifications}
                            margin="normal"
                            required
                        />
                    </div><br/>
                    <div>
                        <TextField
                            fullWidth
                            label="College Name"
                            name="bachelorclgName"
                            placeholder="Enter College Name"
                            defaultValue={this.props.qualificationFields.bachelorclgName}
                            onChange={this.props.handleChangeQualifications}
                            margin="normal"
                            required
                        />
                    </div><br/>
                    <div>
                        <TextField
                            fullWidth
                            label="Bachelor\Masters Degree"
                            name="bachelorDegree"
                            placeholder="Enter College Name"
                            defaultValue={this.props.qualificationFields.bachelorDegree}
                            onChange={this.props.handleChangeQualifications}
                            margin="normal"
                            required
                        />
                    </div><br/>
                    <div>
                        <TextField
                            fullWidth
                            label="Passed Year"
                            name="bpassedYear"
                            placeholder="Enter Year"
                            type="number"
                            defaultValue={this.props.qualificationFields.bpassedYear}
                            onChange={this.props.handleChangeQualifications}
                            margin="normal"
                            required
                        />
                    </div><br/>
                    <div>
                        <TextField
                            fullWidth
                            label="Inter College Name"
                            name="interclgName"
                            placeholder="Enter College Name"
                            defaultValue={this.props.qualificationFields.interclgName}
                            onChange={this.props.handleChangeQualifications}
                            margin="normal"
                            required
                        />
                    </div><br/>
                    <div>
                        <TextField
                            fullWidth
                            label="Inter Course Name"
                            name="interDegree"
                            placeholder="Enter College Name"
                            defaultValue={this.props.qualificationFields.interDegree}
                            onChange={this.props.handleChangeQualifications}
                            margin="normal"
                            required
                        />
                    </div><br/>
                    <div>
                        <TextField
                            fullWidth
                            label="Passed Year"
                            name="ipassedYear"
                            placeholder="Enter Year"
                            type="number"
                            defaultValue={this.props.qualificationFields.ipassedYear}
                            onChange={this.props.handleChangeQualifications}
                            margin="normal"
                            required
                        />
                    </div><br/>
                    <div>
                        <TextField
                            fullWidth
                            label="School Name"
                            name="schoolName"
                            placeholder="Enter College Name"
                            defaultValue={this.props.qualificationFields.schoolName}
                            onChange={this.props.handleChangeQualifications}
                            margin="normal"
                            required
                        />
                    </div><br/>
                    <div>
                        <TextField
                            fullWidth
                            label="Passed Year"
                            name="spassedYear"
                            placeholder="Enter Year"
                            type="number"
                            defaultValue={this.props.qualificationFields.spassedYear}
                            onChange={this.props.handleChangeQualifications}
                            margin="normal"
                            required
                        />
                    </div><br/>
                </form>
            </Fragment>
        )
    }
}
QualificationForm.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(QualificationForm);
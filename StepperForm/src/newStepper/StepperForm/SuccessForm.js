import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

const SuccessForm = () => {
	return (
		<Fragment>
			<Typography variant='h2' align='center' style={{ marginTop: 40 }}>
				Thank you!
			</Typography>
			<Typography component='p' align='center' style={{ marginTop: 40 }}>
				You will get an email with further instructions
			</Typography>
		</Fragment>
	);
};

export default SuccessForm;

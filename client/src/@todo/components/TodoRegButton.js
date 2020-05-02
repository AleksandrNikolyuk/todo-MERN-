import React from 'react';
import PropTypes from 'prop-types';
import {
	withStyles,
	Button,
} from '@material-ui/core';

const styles = () => ({
	root: {},
	button: {
		height: '50px',
		width: '120px',
        background: 'orange',
        border: 'none',
		color: 'white',
		float: 'right',
		'&:hover': {
			color: 'orange',
			border: '1px solid orange'
		},
	},
});

function TodoRegButton({
	classes,
	label,
	clickHandler
}) {
	return (
		<div className={classes.root}>
			<Button
				variant={'outlined'}
				onClick={clickHandler}
				className={classes.button}
			>
				{label}
			</Button>
		</div>
	);
}

TodoRegButton.propTypes = {
	classes: PropTypes.object,
	label: PropTypes.string,
	clickHandler: PropTypes.func,
};

TodoRegButton.defaultProps = {
	classes: {},
	label: '',
	clickHandler: () => {
	},
};

export default withStyles(styles, { withTheme: true })(TodoRegButton);
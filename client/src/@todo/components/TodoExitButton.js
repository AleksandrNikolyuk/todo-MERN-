import React from 'react';
import PropTypes from 'prop-types';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	root: {},
	button: {
		height: '50px',
        width: '50px',
        marginRight: '10px',
		color: 'black',
		float: 'right',
    },
});

function TodoExitButton({
	classes,
	clickHandler
}) {
	return (
		<div className={classes.root}>

			<Fab
				variant="round"
				aria-label="edit"
				onClick={clickHandler}
				className={classes.button}
			>
				<ExitToAppIcon />
			</Fab>
		</div>
	);
}

TodoExitButton.propTypes = {
	classes: PropTypes.object,
	label: PropTypes.string,
	onClick: PropTypes.func,
};

TodoExitButton.defaultProps = {
	classes: {},
	label: '',
};

export default withStyles(styles, { withTheme: true })(TodoExitButton);
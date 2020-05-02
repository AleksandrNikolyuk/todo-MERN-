import React from 'react';
import PropTypes from 'prop-types';
import PageviewIcon from '@material-ui/icons/Pageview';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	root: {
        display: 'flex',
        justifyContent: 'center',
    },
	button: {
		height: '80px',
        width: '80px',
		color: 'blue',
		float: 'right',
    },
});

function TodoApiButton({
	classes,
	clickHandler
}) {
	return (
		<div className={classes.root}>

			<Fab
				variant="round"
				aria-label="chat"
				onClick={clickHandler}
				className={classes.button}
			>
				<PageviewIcon
                    fontSize='large'
                 />
			</Fab>
		</div>
	);
}

TodoApiButton.propTypes = {
	classes: PropTypes.object,
	label: PropTypes.string,
	onClick: PropTypes.func,
};

TodoApiButton.defaultProps = {
	classes: {},
	label: '',
};

export default withStyles(styles, { withTheme: true })(TodoApiButton);
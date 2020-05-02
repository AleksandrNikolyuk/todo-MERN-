import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	root: {
		width: '52px',
		height: '52px',
		marginRight: '14px',
		background: 'orange',
		display: 'block',
	},
});

function TodoImage(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>

		</div>
	);
}

TodoImage.propTypes = {
	classes: PropTypes.object,
};

TodoImage.defaultProps = {};

export default withStyles(styles, { withTheme: true })(TodoImage);
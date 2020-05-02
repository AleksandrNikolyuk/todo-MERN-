import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import TodoSearch from './TodoSearch';

const styles = () => ({
	root: {
		width: '100%',
		padding: '5px',
		margin: '30px 50px',
		display: 'flex',
		flexDirection: 'column',
	},
});

function TodoSearchContainer({
	classes
}) {
	
	return (
		<div className={classes.root}>
			<TodoSearch/>
		</div>
	);
}

TodoSearchContainer.defaultProps = {};

TodoSearchContainer.propTypes = {
	classes: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(TodoSearchContainer);
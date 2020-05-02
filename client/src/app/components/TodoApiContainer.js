import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import TodoApiItem from './TodoApiItem';

const styles = () => ({
	root: {
        display: 'flex',
        position: 'absolute',
        bottom: '50px',
        right: '150px',
        zIndex: '99',
	},
});

function TodoApiContainer({classes}) {
	
	return (
		<div className={classes.root}>
			<TodoApiItem/>
		</div>
	);
}

TodoApiContainer.propTypes = {
	classes: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(TodoApiContainer);
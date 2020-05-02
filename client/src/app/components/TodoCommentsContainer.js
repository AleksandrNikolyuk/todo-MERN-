import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import TodoComments from './TodoComments';
import TodoListComments from './TodoListComments';

const styles = () => ({
	root: {
		width: '33%',
		padding: '20px',
		margin: '30px 50px',
		display: 'flex',
		flexDirection: 'column',
		borderWidth: '2px',
		borderStyle: 'solid',
		borderColor: '#eee',
	},
});

function TodoCommentsContainer({classes}) {
		
	return (
		<div className={classes.root}>
			<TodoComments/>
			<TodoListComments/>
		</div>
	);
}

TodoCommentsContainer.defaultProps = {};

TodoCommentsContainer.propTypes = {
	classes: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(TodoCommentsContainer);
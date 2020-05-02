import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import TodoCommentsContainer from './TodoCommentsContainer';
import TodoMenu from './TodoMenu';
import TodoItemsContainer from './TodoItemsContainer';
import TodoChatContainer from './TodoChatContainer';
import TodoApiContainer from './TodoApiContainer';

const styles = () => ({
	root: {
		width: '100%',
		height: '100vh',
		position: 'relative',
		display: 'flex',
		justifyContent: 'row',
	},
});

function TodoLayout({classes}) {
	
	return (
		<div className={classes.root}>
			<TodoMenu/>
			<TodoItemsContainer/>
			<TodoApiContainer/>
			<TodoCommentsContainer/>
			<TodoChatContainer/>
		</div>
	);
}

TodoLayout.propTypes = {
	classes: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(TodoLayout);
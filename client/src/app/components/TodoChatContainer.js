import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import TodoChatItem from './TodoChatItem';

const styles = () => ({
	root: {
        display: 'flex',
        position: 'absolute',
        bottom: '50px',
        right: '50px',
        zIndex: '99',
	},
});


function TodoChatContainer({classes}) {
	
	return (
		<div className={classes.root}>
			<TodoChatItem/>
		</div>
	);
}

TodoChatContainer.defaultProps = {};

TodoChatContainer.propTypes = {
	classes: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(TodoChatContainer);
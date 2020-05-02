import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = () => ({
	root: {
		width: '500px',
        height: '650px',
        marginBottom: '10px',
        display: 'flex',
        background: '#eee',
        borderRadius: '20px',
	},
});

function TodoChatBlock({classes}) {
	
	return (
		<div className={classes.root}>

		</div>
	);
}

TodoChatBlock.propTypes = {
	classes: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(TodoChatBlock);
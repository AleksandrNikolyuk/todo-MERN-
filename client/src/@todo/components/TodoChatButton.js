import React from 'react';
import PropTypes from 'prop-types';
import ChatIcon from '@material-ui/icons/Chat';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	root: {},
	button: {
		height: '80px',
        width: '80px',
		color: 'red',
		float: 'right',
    },
});

function TodoChatButton({
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
				<ChatIcon
                    fontSize='large'
                 />
			</Fab>
		</div>
	);
}

TodoChatButton.propTypes = {
	classes: PropTypes.object,
	label: PropTypes.string,
	onClick: PropTypes.func,
};

TodoChatButton.defaultProps = {
	classes: {},
	label: '',
};

export default withStyles(styles, { withTheme: true })(TodoChatButton);
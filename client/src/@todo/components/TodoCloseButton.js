import React from 'react';
import PropTypes from 'prop-types';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	root: {},
	button: {
		height: '40px',
        width: '40px',
        marginBottom: '5px',
		float: 'right',
    },
});

function TodoCloseButton({
	classes,
	clickHandler
}) {
	return (
		<div className={classes.root}>
            <HighlightOffIcon 
                className={classes.button}
                onClick={clickHandler}
                fontSize='large'
            />
		</div>
	);
}

TodoCloseButton.propTypes = {
	classes: PropTypes.object,
	label: PropTypes.string,
	onClick: PropTypes.func,
};

TodoCloseButton.defaultProps = {
	classes: {},
	label: '',
};

export default withStyles(styles, { withTheme: true })(TodoCloseButton);
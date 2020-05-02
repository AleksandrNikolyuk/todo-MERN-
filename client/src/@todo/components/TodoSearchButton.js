import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';


const styles = () => ({
	root: {},
	button: {
		height: '50px',
        width: '50px',
        marginBottom: '5px',
		float: 'right',
    },
});

function TodoSearchButton({
	classes,
	clickHandler
}) {
	return (
		<div className={classes.root}>
			<Fab
				variant="round"
				aria-label="edit"
				onClick={clickHandler}
				className={classes.button}
			>
				<SearchIcon 
					onClick={clickHandler}
					fontSize='large'
				/>
			</Fab>
		</div>
	);
}

TodoSearchButton.propTypes = {
	classes: PropTypes.object,
	label: PropTypes.string,
	onClick: PropTypes.func,
};

TodoSearchButton.defaultProps = {
	classes: {},
	label: '',
};

export default withStyles(styles, { withTheme: true })(TodoSearchButton);
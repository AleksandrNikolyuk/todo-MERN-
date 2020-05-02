import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import TodoSearchPokemon from './TodoSearchPokemon'

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

function TodoApiBlock({classes}) {
	
	return (
		<div className={classes.root}>
            <TodoSearchPokemon/>
		</div>
	);
}

TodoApiBlock.propTypes = {
	classes: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(TodoApiBlock);
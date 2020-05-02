import React  from 'react';
import PropTypes from 'prop-types';
import {
	withStyles,
	TextField,
} from '@material-ui/core';

const styles = () => ({
	root: {
		width: '100%',
		margin: '0',
	},
});

function TodoTextfield({
	classes,
	label,
	rows,
	value,
	handlerChange,
	changeOnKeyEnter,
	emptyChange,
	type,
	id,
	name
}) {
	return (
		<div>
			<TextField
				className={classes.root}
				multiline
				id={id}
				label={label}
				margin={'normal'}
				variant={'outlined'}
				rows={rows}
				type={type}
				name={name}
				value={value}
				onChange={handlerChange}

				InputProps={{
					onKeyDown: event => {
						if (changeOnKeyEnter && event.key === 'Enter') {
							if (emptyChange || event.target.value) {
								changeOnKeyEnter(event);
							}
						}
					}
				}}
			/>
		</div>
	);
}

TodoTextfield.propTypes = {
	classes: PropTypes.object,
	rows: PropTypes.number,
	label: PropTypes.string,
	value: PropTypes.string,
	handlerChange: PropTypes.func,
};

TodoTextfield.defaultProps = {
	classes: {},
	handlerChange: () => {
	},
	label: '',
	value: '',
	row: 4,
};

export default withStyles(styles, { withTheme: true })(TodoTextfield);
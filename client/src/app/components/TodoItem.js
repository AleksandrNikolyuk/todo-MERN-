import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import {
	TodoButton,
	TodoTextfield,
} from '../../@todo';
import { addItem } from '../../store/action';

const styles = () => ({
	root: {
		padding: '20px',
		display: 'flex',
		flexDirection: 'column',
		borderWidth: '2px',
		borderStyle: 'solid',
		borderColor: '#eee',
	},
	inputBlock: {
		height: '100px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	editField: {
		width: '330px',
	},
});

function TodoItem({
	t,
	classes,
	addItem,
}) {

	const [newItem, setAddItem] = useState('')

	const handleAddItem = e => {
		setAddItem(e.target.value );
	};

	const handleSubmit = () => {
		addItem(newItem);
		setAddItem('')
	};

	return (
		<div className={classes.root}>
			<h1>{t('items')}</h1>
			<div className={classes.inputBlock}>
				<div className={classes.editField}>
					<TodoTextfield
						value={newItem}
						handlerChange={handleAddItem}
						label={t('user')}
						changeOnKeyEnter={event => {
							handleSubmit()
						}}
					/>
				</div>
				<TodoButton
					label={t('buttons.addNew')}
					clickHandler={handleSubmit}
				/>
			</div>
		</div>
	);
}

TodoItem.defaultProps = {
	value: '',
	addItem: () => {
	},
};

TodoItem.propTypes = {
	handler: PropTypes.func,
	t: PropTypes.func,
	value: PropTypes.string,
	classes: PropTypes.object,
	// addItem: PropTypes.func,
};

const mapStateToProps = state => ({
	...state,
});

const mapDispatchToProps = dispatch => ({
	addItem: (data) => {
		dispatch(addItem(data));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withStyles(styles, { withTheme: true })(TodoItem)));

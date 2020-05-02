import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import {
	TodoSearchButton,
	TodoTextfield,
} from '../../@todo';

const styles = () => ({
	root: {
		padding: '20px',
		display: 'flex',
		flexDirection: 'column',
	},
	inputBlock: {
		height: '50px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	editField: {
		width: '300px',
	},
	result: {
		listStyleType: 'none',
		fontSize: '24px',
		color: 'blue',
	},
	title: {
		fontSize: '18px',
	},
});

function TodoSearch({
	t,
	classes,
	addSearchItemAction,
	search
}) {

	const [searchItem, setSearchItem] = useState('')

	const handleAddItem = e => {
		setSearchItem(e.target.value );
	};

	const handleSubmit = () => {
		addSearchItemAction(searchItem);
		setSearchItem('')
	};

	return (
		<div className={classes.root}>
			<h1 className={classes.title}>{t('search')}</h1>
			<div className={classes.inputBlock}>
				<div className={classes.editField}>
					<TodoTextfield
						value={searchItem}
						handlerChange={handleAddItem}
						label={t('user')}
						changeOnKeyEnter={event => {
							handleSubmit()
						}}
					/>
				</div>
				<TodoSearchButton
					label={t('buttons.addNew')}
					clickHandler={handleSubmit}
				/>
			</div>
			<ul>
				{search.length !==0 && search.map(item => {
					return (
						<li 
							key={item}
							className={classes.result}
						>
							{item}
						</li>
					)
				})}
			</ul>
		</div>
	);
}

TodoSearch.defaultProps = {
	value: '',
	addSearchItemAction: () => {
	},
};

TodoSearch.propTypes = {
	handler: PropTypes.func,
	t: PropTypes.func,
	value: PropTypes.string,
	classes: PropTypes.object,
};

const mapStateToProps = state => ({
	...state,
});

const mapDispatchToProps = dispatch => ({
	addSearchItemAction: (data) =>
		dispatch({
			type: 'CLICK_INCREMENT',
			data
		})	
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withStyles(styles, { withTheme: true })(TodoSearch)));

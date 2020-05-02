import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import {
	TodoButton,
	TodoImage,
	TodoTextfield,
} from '../../@todo';
import { addComment } from '../../store/action';

const styles = () => ({
	root: { marginBottom: '20px' },
	commentBlock: {
		marginBottom: '20px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	editField: {
		width: '500px',
	},
});

function TodoComments({
	t,
	classes,
	addComment,
}) {

	const [newComment, setComment] = useState('');

	const handleAddComment = e => {
		setComment( e.target.value );
	}; 

	const handleSubmit = () => {
		addComment(newComment);
		setComment(' ');
	};
	
	return (
		<div className={classes.root}>
			<h1>{t('comments')}</h1>
			<div className={classes.commentBlock}>
				<TodoImage/>
				<div className={classes.editField}>
					<TodoTextfield
						value={newComment}
						label={t('comments')}
						handlerChange={handleAddComment}
						rows={4}
					/>
				</div>
			</div>
			<TodoButton
				label={t('buttons.addNew')}
				clickHandler={handleSubmit}
			/>
		</div>
	);
}

TodoComments.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func,
	addComment: PropTypes.func,
};

TodoComments.defaultProps = {
	classes: {},
	addComment: () => {
	},
};

const mapDispatchToProps = dispatch => ({
	addComment: (data) => {
		dispatch(addComment(data));
	},
});

export default connect(null, mapDispatchToProps)(withTranslation()(withStyles(styles, { withTheme: true })(TodoComments)));
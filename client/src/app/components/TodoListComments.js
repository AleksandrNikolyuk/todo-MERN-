import React from 'react';
import ScrollArea from 'react-scrollbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import {
	TodoImage,
} from '../../@todo';

const styles = () => ({
	root: {
		paddingRight: '15px',
	},
	list: {
		width: 'auto',
		display: 'flex',
		paddingBottom: '10px',
		marginBottom: '10px',
		flexDirection: 'column',
		borderBottom: '2px solid #eee',
	},
	item: {
		marginTop: '20px',
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
	},
	text: {
		fontSize: '20px',
	},
});

function TodoListComments({classes, comments, selectedItem}) {
	
	return (
		<ScrollArea
			speed={0.8}
			horizontal={false}
		>
			<div className={classes.root}>
				{comments.length !== 0 && comments.map(item => {
					if (item.itemId[0] === selectedItem) {
						return (
							<div className={classes.list} key={item.id}>
								<div key={item.id} className={classes.item}>
									<TodoImage/>
									<div className={classes.text}>
										{item.content}
									</div>
								</div>
							</div>
						);
					} else {
						return '';
					}
				})}
			</div>
		</ScrollArea>
	);
	
}

TodoListComments.defaultProps = {
	classes: {},
	comments: [],
	selectedItem: '',
};

TodoListComments.propTypes = {
	classes: PropTypes.object,
	comments: PropTypes.array,
	selectedItem: PropTypes.string,
	t: PropTypes.func,
};

const mapStateToProps = ({ comments, selected }) => ({
	comments,
	selectedItem: selected.item,
});

export default connect(mapStateToProps, null)(withTranslation()(withStyles(styles, { withTheme: true })(TodoListComments)));

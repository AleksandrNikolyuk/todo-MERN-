import React, { useState } from 'react';
import ScrollArea from 'react-scrollbar';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import * as Actions from '../../store/action';
import { TodoDelButton, TodoEditButton, TodoTextfield } from '../../@todo';

const styles = () => ({
	root: {
		listStyle: 'none',
		padding: '0 15px 0 10px',
	},
	list: {
		width: '100%',
		display: 'flex',
		paddingBottom: '10px',
		marginBottom: '10px',
		flexDirection: 'column',
		borderBottom: '2px solid #eee',
		'&:hover': {
			background: '#eef7fa'
		}
	},
	item: {
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
	},
	title: {
		display: 'flex',
		paddingLeft: '10px',
		fontSize: '20px',
	},
	selectedItem: {
		borderLeft: '2px solid red',
		marginLeft: '-2px',
	},
	commentsCount: {
		height: '32px',
		background: '#87CEFA',
		marginLeft: '10px',
		padding: '3px 13px',
		color: 'white',
		borderRadius: '15px',
	},
	buttonBlock: {
		display: 'flex',
	},
	editField: {
		width: '300px',
	},
	count: {
		display: 'flex',
		alignItems: 'center',
	}
});

function TodoListItem({
	t,
	classes,
	deleteItem,
	changeItem,
	items,
	selectedItem,
	comments,
	changeItemContent,
}) {
	
	const [state, setState] = useState('')
	const [newstate, setNewState] = useState('')

	const activeEditItem = (id, content) => {
		setState ({
			id, content
		})
		setNewState(content)
	}

	const handleSubmit = (id) => {
		changeItemContent(newstate, id);
		setNewState('')
	};

	const endEditItem = () => {
		setState({})
	}

	const handleAddItem = e => {
		setNewState(e.target.value );
	};
	
	return (
		<ScrollArea
			speed={0.8}
			horizontal={false}
		>
			<ul className={classes.root}>
				{items.length !== 0 && items.map(item => {
					
					const select = selectedItem === item.id 
						? classes.selectedItem
						: '';
					
					const commentsCount = comments.filter(comment => comment.itemId.some(id => id === item.id));

					return (
						<li
							className={classNames(classes.list, select)}
							key={item.id}
							onClick={changeItem(item.id)}
						>
							<div className={classes.item}>
								<div 
									className={classes.title}
									onDoubleClick={() => {
										activeEditItem(item.id, item.content)
									}}
								>
									{state.content === item.content && state.id === item.id
										? (
											<div className={classes.editField}>
												<TodoTextfield
													value={newstate}
													handlerChange={handleAddItem}
													label={t('user')}
													changeOnKeyEnter={event => {
														endEditItem();
														handleSubmit(item.id)
													}}
												/>
											</div>
										)
										: (
											<div>{item.content}</div>
										)
									}
									<div className={classes.count}>
										<span className={classes.commentsCount}>{commentsCount.length}</span>
									</div>
								</div>
								<div className={classes.buttonBlock}>
									<TodoEditButton
										label={t('buttons.edit')}
										clickHandler={() => {
											activeEditItem(item.id, item.content)
										}}
									/>
									<TodoDelButton
										label={t('buttons.delete')}
										clickHandler={deleteItem(item.id)}
									/>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</ScrollArea>
	);
}

TodoListItem.defaultProps = {
	state: {},
	classes: {},
	items: [],
	selectedItem: '',
	comment: [],
	deletItem: () => {
	},
	changeItem: () => {
	},
	changeItemContent: () => {
	},
};

TodoListItem.propTypes = {
	classes: PropTypes.object,
	items: PropTypes.array,
	selectedItem: PropTypes.string,
	comments: PropTypes.array,
	clickHandler: PropTypes.func,
	t: PropTypes.func,
	deleteItem: PropTypes.func,
	changeItem: PropTypes.func,
	changeItemContent: PropTypes.func,
};

const mapStateToProps = ({ items, selected, comments }) => ({
	items: items,
	selectedItem: selected.item,
	comments,
});

const mapDispatchToProps = dispatch => ({
	
	deleteItem: (id) => () => {
		dispatch(Actions.deletItem(id));
	},
	changeItem: (id) => () => {
		dispatch(Actions.changeItem(id));
	},
	changeItemContent: (item, id) => {
		dispatch(Actions.changeItemContent(item, id));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withStyles(styles, { withTheme: true })(TodoListItem)));

import * as Actions from './index';
import uniqid from 'uniqid';

export const addItem = (data) => (dispatch) => {
	const newItem = {
		id: uniqid(),
		content: data,
	};
	dispatch({
		type: Actions.ADD_ITEM,
		payload: newItem
	});
	dispatch(changeItem(newItem.id))
};

export const deletItem = id => (dispatch) => {
	dispatch({
		type: Actions.DELETE_ITEM,
		payload: {
			id,
		},
	});
};

export const changeItem = item => (dispatch) => {
	dispatch({
		type: Actions.CHANGE_SELECTED_ITEM,
		payload: {
			item,
		},
	});
};

export const changeItemContent = (data, id) => (dispatch) => {
	dispatch({
		type: Actions.CHANGE_ITEM_CONTENT,
		payload: {
			id,
			content: data,
		}
	})
}
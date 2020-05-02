import * as Actions from '../action';
import uniqid from 'uniqid';

export const addComment = data => (dispatch, getState) => {
	const selected = getState().selected.item;
	dispatch({
		type: Actions.ADD_COMMENT,
		payload: {
			id: uniqid(),
			content: data,
			itemId: [ selected ],
		},
	});
};
import * as Actions from '../action';

const initialState = [];

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case Actions.ADD_COMMENT: {
			return [
				...state,
				payload,
			];
		}
		case Actions.DELETE_ITEM: {
			return [
				...state.filter(comment => {
					const commentDeleted = comment.itemId.some(id => id === payload.id);
					return !commentDeleted;
				}),
			];
		}
		default: {
			return state;
		}
	}
}
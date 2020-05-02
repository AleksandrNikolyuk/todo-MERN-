import * as Actions from '../action';

const initialState = [];

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case Actions.ADD_ITEM: {
			return [
				...state,
				payload,
			];
		}
		case Actions.DELETE_ITEM: {
			return [
				...state.filter(item => item.id !== payload.id),
			];
		}
		case Actions.CHANGE_ITEM_CONTENT: {
			return state.map( item => {
				if( payload.id === item.id ){
				item.content = payload.content;
				}
				return item;
			});
		}
		default:
			return state;
	}
};

import * as Actions from '../action';

const initialState = [];

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case Actions.ADD_SEARCH: {
			
			return [
				payload
			];
		}
		default:
			return state;
	}
};

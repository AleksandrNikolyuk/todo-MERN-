import * as Actions from '../action';

const initialState = {
    item: '',
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case Actions.CHANGE_SELECTED_ITEM: {
			return {
				...state,
				...payload,
			};
		}
		default: {
			return state;
		}
	}
}
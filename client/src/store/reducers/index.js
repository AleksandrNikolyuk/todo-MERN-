import items from './items';
import comments from './comments';
import selected from './selected';
import search from './search';
import addSearchItem from '../action/search.actions'
import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

 export const rootEpic = combineEpics(
	addSearchItem,
);

 const rootReducer = combineReducers({
	items,
	comments,
	selected,
	search,
});

export default ( rootReducer)
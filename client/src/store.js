import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
// import logger from "redux-logger"
import rootReducer  from './store/reducers/index';
import  { rootEpic } from './store/reducers/index';
import { saveState, loadState } from './localstorage';
// const initialState = {}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const epicMiddleware = createEpicMiddleware();

const middleware = applyMiddleware(
	// logger,
	epicMiddleware,
	thunk);

let store = null;

const preloadedState = loadState();

if( preloadedState === null){
	store = createStore(
		rootReducer,
		composeEnhancers(middleware),
	);
} else {
	store = createStore(
		rootReducer,
		preloadedState,
		composeEnhancers(middleware),
	);
}

store.subscribe( () => {
	const state = store.getState();
	saveState( state );
});

epicMiddleware.run(rootEpic);

export default store;

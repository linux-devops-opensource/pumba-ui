import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

let store;

function configureStore(history, initialState) {
	const middlewareList = [ thunk, logger, routerMiddleware(history) ];

	const enhancer = composeEnhancers(applyMiddleware(...middlewareList));
	store = createStore(rootReducer, initialState, enhancer);

	return store;
}

export { store, configureStore };

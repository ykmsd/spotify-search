import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);

const store = createStore(rootReducer, enhancers, applyMiddleware(thunk));

export default store;

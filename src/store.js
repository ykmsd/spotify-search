import { combineReducers, createStore, compose } from 'redux';

const reducers = combineReducers({
  /* ADD Reducers here */
});

const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);

const store = createStore(reducers, enhancers);

export default store;

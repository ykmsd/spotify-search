import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducer/reducer';

const reducers = combineReducers({
  reducer,
});

const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);

const store = createStore(reducers, enhancers, applyMiddleware(thunk));

export default store;

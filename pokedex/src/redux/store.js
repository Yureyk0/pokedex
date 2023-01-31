import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redusers/rootReduser';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;

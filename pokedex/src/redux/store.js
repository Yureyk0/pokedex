import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './roooReduser'

const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

export default store

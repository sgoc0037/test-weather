import { createStore, combineReducers, applyMiddleware } from 'redux';
import weatherReducer from './weatherReducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
    weather: weatherReducer
})

let store = createStore(reducers, applyMiddleware(thunk));


window.store = store

export default store;
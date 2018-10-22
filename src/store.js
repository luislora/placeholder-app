import {createStore, combineReducers} from 'redux'
import CountReducer from './reducers/CountReducer'

const reducer = combineReducers({
    CountReducer
});

let store = createStore(reducer);

export default store;
import { combineReducers } from 'redux';
import  countriesReducer  from './reducer';

const rootReducer = combineReducers({
    countriesReducer
});

export default rootReducer;
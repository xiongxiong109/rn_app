// reducers
import { combineReducers } from 'redux';
import timeModule from './Counter';
import newsModule from './News';

const reducers = combineReducers({timeModule, newsModule});
export default reducers;
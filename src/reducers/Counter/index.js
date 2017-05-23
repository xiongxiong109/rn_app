// 计数器模块
import { combineReducers } from 'redux';

const isRunning = (state = false, action) => {
	return state;
}

const curTime = (state = 0, action) => {
	return state;
}

const totalTime = (state = 0, action) => {
	return state;
}


export default timeModule = combineReducers({
	isRunning,
	curTime,
	totalTime
})
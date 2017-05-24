// 计数器模块
import { combineReducers } from 'redux';
import { TimeCsts } from '../../consts';

const isRunning = (state = false, action) => {
	switch (action.type) {
		case TimeCsts.TOGGLE_CHANGE:
			return !state;
		default:
			return state;
	}
	return state;
}

// 计算单个时间
const curTime = (state = 0, action) => {
	switch (action.type) {
		case TimeCsts.ADD_TIME:
			return state + 0.01;
		case TimeCsts.CLEAR_CUR_TIME:
			return 0;
		default:
			return state;
	}
	return state;
}
// 计算总时间
const totalTime = (state = 0, action) => {
	switch (action.type) {
		case TimeCsts.ADD_TIME:
			return state + 0.01;
		default:
			return state;
	}
	return state;
}


export default timeModule = combineReducers({
	isRunning,
	curTime,
	totalTime
})
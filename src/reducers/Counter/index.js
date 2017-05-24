// 计数器模块
import { combineReducers } from 'redux';
import { TimeCsts } from '../../consts';

const isRunning = (state = false, action) => {
	switch (action.type) {
		case TimeCsts.TOGGLE_CHANGE:
			return !state;
		break;
		default:
			return state;
		break;
	}
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
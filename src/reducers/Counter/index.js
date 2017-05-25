// 计数器模块
import { v4 } from 'uuid';
import { combineReducers } from 'redux';
import { TimeCsts } from '../../consts';

const isRunning = (state = false, action) => {
	switch (action.type) {
		case TimeCsts.TOGGLE_CHANGE:
			return !state;
		case TimeCsts.CLEAR_ALL:
			return false;
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
		case TimeCsts.CLEAR_ALL:
			return 0;
		default:
			return state;
	}
	return state;
}

// 当前计数次数
const curCount = (state = 0, action) => {
	switch (action.type) {
		case TimeCsts.ADD_CUR_TIME:
			return state + 1;
		case TimeCsts.CLEAR_ALL:
			return 0;
		default:
			return state;
	}
}
// 计算总时间
const totalTime = (state = 0, action) => {
	switch (action.type) {
		case TimeCsts.ADD_TIME:
			return state + 0.01;
		case TimeCsts.CLEAR_ALL:
			return 0;
		default:
			return state;
	}
	return state;
}

// 计时数组
const list = (state = [], action) => {
	switch (action.type) {
		case TimeCsts.ADD_CUR_TIME:
			let { time } = action.payload;
			return [{id: v4(), time}, ...state];
		case TimeCsts.CLEAR_ALL:
			return [];
		default:
			return state;
	}
	return state;
}

export default timeModule = combineReducers({
	isRunning,
	curTime,
	totalTime,
	curCount,
	list
})
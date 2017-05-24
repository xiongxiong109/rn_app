// time actions
import { TimeCsts } from '../consts';

// 切换启动与暂停
export const toggleOnOff = () => {
	return {
		type: TimeCsts.TOGGLE_CHANGE,
		payload: {}
	}
}

// 计算总时间
export const addTotalTime = () => {
	return {
		type: TimeCsts.ADD_TIME,
		payload: {}
	}
}

// 增加一个item时间
export const addCurTime = (time) => {
	return {
		type: TimeCsts.ADD_CUR_TIME,
		payload: {time}
	}
}

// 清除当前时间
export const clearCurTime = () => {
	return {
		type: TimeCsts.CLEAR_CUR_TIME,
		payload: {}
	}
}
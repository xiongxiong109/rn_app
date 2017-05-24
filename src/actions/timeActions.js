// time actions
import { TimeCsts } from '../consts';

// 切换启动与暂停
export const toggleOnOff = () => {
	return {
		type: TimeCsts.TOGGLE_CHANGE,
		payload: {}
	}
}
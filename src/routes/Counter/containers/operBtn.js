// operBtn container
import { connect } from 'react-redux';
import OperBtn from '../components/operBtn';
import { TimeActs } from '../../../actions';

// 这里只获取整个程序的timeModule模块
const mapStateToProps = (state) => ({
	time: state.timeModule
});

const mapDispatchToProps = (dispatch) => ({
	// 切换计时与暂停
	evt_toggleRunning() {
		dispatch(TimeActs.toggleOnOff());
	},
	// 计算总时间
	evt_countTotalTime() {
		dispatch(TimeActs.addTotalTime());
	},
	// 记录单个时间
	evt_setTime(time) {
		if (time) {
			// 增加一个item
			dispatch(TimeActs.addCurTime(time));
			// 清除当前curTime
			dispatch(TimeActs.clearCurTime());
		}
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(OperBtn);
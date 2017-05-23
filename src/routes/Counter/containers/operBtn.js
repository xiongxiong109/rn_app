// operBtn container
import { connect } from 'react-redux';
import OperBtn from '../components/operBtn';

// 这里只获取整个程序的timeModule模块
const mapStateToProps = (state) => ({
	time: state.timeModule
});

const mapDispatchToProps = (dispatch) => ({
	// 切换计时与暂停
	evt_toggleRunning() {
		alert('message');
		// dispatch();
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(OperBtn);
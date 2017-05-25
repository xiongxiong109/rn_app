// 计时列表
import { connect } from 'react-redux';
import TimeList from '../components/timeList';

const mapStateToProps = (state) => ({
	time: state.timeModule
});

export default connect(mapStateToProps)(TimeList);
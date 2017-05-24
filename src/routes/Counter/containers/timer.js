// timer
import { connect } from 'react-redux';

import Timer from '../components/timer';

const mapStateToProps = (state) => ({
	time: state.timeModule
});

export default connect(mapStateToProps)(Timer);
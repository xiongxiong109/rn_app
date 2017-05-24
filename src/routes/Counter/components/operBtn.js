// 操作按钮
import React, { Component, PropTypes } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native';

import utils from '../../../utils';

export default class OperBtn extends Component {

	// 静态类型检查
	static propTypes = {
		time: PropTypes.shape({
			isRunning: PropTypes.bool
		}),
		evt_toggleRunning: PropTypes.func,
		evt_setTime: PropTypes.func
	}
	// lifecircle
	componentWillMount() {
		// 计时变量
		this.counterTimer = null;
	}

	// 渲染页面
	render() {
		const { time } = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.btnWrapper}>
					<TouchableOpacity style={styles.btn} onPress={() => this.evt_Time(time.curTime)}>
						<Text>计次</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn} onPress={() => this.evt_onOff()}>
						<Text style={
							time.isRunning ? styles.stop : styles.running
						}>{ time.isRunning ? '停止' : '启动' }</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
	// 页面销毁
	componentWillUnmount() {
		this.clearTimer();
	}
	// methods
	clearTimer() {
		const { time, evt_toggleRunning } = this.props;
		// 关闭计时
		if (time.isRunning) {
			evt_toggleRunning();
			clearInterval(this.counterTimer);
		}
	}
	evt_Time(curTime) {
		const { time, evt_setTime } = this.props;
		if (time.curTime && time.isRunning) {
			evt_setTime(curTime);
		}
	}
	evt_onOff() {
		const { time, evt_toggleRunning, evt_countTotalTime } = this.props;
		evt_toggleRunning();
		if (!time.isRunning) {
			this.counterTimer = setInterval(() => {
				evt_countTotalTime();
			}, 50);
		} else {
			clearInterval(this.counterTimer);
		}
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center'
	},
	btnWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: utils.width * .8,
		height: 80,
		padding: 10
	},
	btn: {
		width: 60,
		height: 60,
		borderRadius: 60,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff'
	},
	running: {
		color: '#d00'
	},
	stop: {
		color: '#ccc'
	}
});
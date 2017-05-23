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
		evt_toggleRunning: PropTypes.func
	}

	// 渲染页面
	render() {
		const { time, evt_toggleRunning } = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.btnWrapper}>
					<TouchableOpacity style={styles.btn}>
						<Text>计次</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn} onPress={() => evt_toggleRunning()}>
						<Text style={
							time.isRunning ? styles.stop : styles.running
						}>启动</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
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
		margin: 'auto',
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
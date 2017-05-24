// 计时面板
import React, { Component, PropTypes } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions
} from 'react-native';

export default class Timer extends Component {

	static propTypes = {
		time: PropTypes.shape({
			curTime: PropTypes.number,
			totalTime: PropTypes.number
		})
	}

	render() {
		const { time } = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.perTime}>
					<Text style={styles.perTxt}>{this.format(time.curTime)}</Text>
				</View>
				<View style={styles.totalTime}>
					<Text style={styles.totalTxt}>{this.format(time.totalTime)}</Text>
				</View>
			</View>
		);
	}
	// methods
	// 将
	format(time) {
		return time.toFixed(2);
	}
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
	// 容器
	container: {
		width: width,
		height: 150,
		alignItems: 'center',
		backgroundColor: '#fff'
	},
	perTime: {
		width: width * 0.6,
		paddingTop: 15
	},
	perTxt: {
		textAlign: 'right',
		fontSize: 16
	},
	totalTime: {
		width: width,
		height: 50,
		justifyContent: 'center'
	},
	totalTxt: {
		marginTop: -8,
		textAlign: 'center',
		fontSize: 60
	}
});
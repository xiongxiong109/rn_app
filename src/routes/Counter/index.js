// 计数器
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Timer from './components/timer';
import OperBtn from './containers/operBtn';

export default class Counter extends Component {
	static navigationOptions = {
		title: '计时器'
	}
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={styles.container}>
				<Timer />
				<OperBtn />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ddd'
	}
});
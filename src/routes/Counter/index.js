// 计数器
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
				<Text style={styles.txt}>Counter</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ddd'
	},
	txt: {
		fontSize: 20,
		color: '#c00'
	}
});
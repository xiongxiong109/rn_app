// 城市短讯
import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

export default class BriefInfo extends Component {
	render() {
		return (
			<View style={styles.wrap}>
				<Text style={[styles.city, styles.ft]}>福州</Text>
				<Text style={[styles.state, styles.ft]}>大部晴朗</Text>
				<Text style={[styles.temp, styles.ft]}>15°</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	wrap: {
		padding: 20,
		height: 250,
		alignItems: 'center',
		justifyContent: 'center'
	},
	ft: {
		color: '#fff'
	},
	city: {
		fontSize: 28
	},
	state: {
		fontSize: 16
	},
	temp: {
		fontSize: 90,
		fontWeight: "100",
		paddingLeft: 20
	}
});
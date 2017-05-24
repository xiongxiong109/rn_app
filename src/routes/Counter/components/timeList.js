// 计时列表
import React, { Component } from 'react';
import {
	ScrollView,
	View,
	Text,
	StyleSheet
} from 'react-native';

import utils from '../../../utils';

export default class TimeList extends Component {
	render() {
		return (
			<ScrollView style={styles.container}>
				<View style={styles.item}><Text>0.05</Text></View>
				<View style={styles.item}><Text>0.18</Text></View>
				<View style={styles.item}><Text>13.58</Text></View>
				<View style={styles.item}><Text>13.58</Text></View>
				<View style={styles.item}><Text>13.58</Text></View>
				<View style={styles.item}><Text>13.58</Text></View>
				<View style={styles.item}><Text>13.58</Text></View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		height: 150,
		backgroundColor: '#fefefe'
	},
	item: {
		paddingLeft: 10,
		paddingRight: 10,
		height: 50,
		borderBottomWidth: utils.halfPix / 2,
		alignItems: 'flex-end',
		justifyContent: 'center'
	}
});
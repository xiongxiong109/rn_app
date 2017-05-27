// 城市短讯
import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

import axios from 'axios';

export default class BriefInfo extends Component {
	render() {
		return (
			<View style={styles.wrap}>
				<Text style={[styles.city, styles.ft]} onPress={() => this.fetchData()}>上海</Text>
				<Text style={[styles.state, styles.ft]}>大部晴朗</Text>
				<Text style={[styles.temp, styles.ft]}>15°</Text>
			</View>
		)
	}

	fetchData() {
		axios
		.get('https://api.douban.com/v2/book/1220562', {})
		.then(this.fetchSucc)
		.catch(this.fetchErr)
	}
	fetchSucc(res) {
		alert(JSON.stringify(res.data));
	}
	fetchErr(err) {
		alert('err');
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
// 一天的天气状况
import React, { Component } from 'react';
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	Image
} from 'react-native';

const weather = [
	require('../../../img/clear.png'),
	require('../../../img/cloudy.png'),
	require('../../../img/pt_cloudy.png'),
	require('../../../img/rain.png'),
	require('../../../img/strom.png'),
]
const day = [];
for (let i = 0; i < 24; i++) {day.push(i);}

export default class OneDayInfo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.curDay}>
					<Text style={[styles.ft, styles.date]}>星期六  今天</Text>
					<View style={styles.tempRange}>
						<Text style={[styles.ft, styles.rangeHigh]}>16</Text>
						<Text style={[styles.ft, styles.rangeLow]}>14</Text>
					</View>
				</View>
				<ScrollView style={styles.dayTempList} horizontal={true} showsHorizontalScrollIndicator={false}>
					{day.map((item, idx) => (
						<View style={styles.tempItem} key={item}>
							<Text style={styles.ft}>{idx}时</Text>
							<Image source={weather[idx % 5]} style={styles.weatherIcon}/>
							<Text style={[styles.ft, styles.temp]}>15°</Text>
						</View>
					))}
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	ft: {
		color: '#fff'
	},
	date: {
		flex: 10
	},
	tempRange: {
		flexDirection: 'row',
		flex: 2,
		justifyContent: 'space-around'
	},
	dayTempList: {
		paddingTop: 10,
		paddingBottom: 10,
		borderTopWidth: utils.halfPix / 2,
		borderBottomWidth: utils.halfPix / 2,
		borderColor: 'rgba(255,255,255,.5)'
	},
	curDay: {
		paddingBottom: 8,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	tempItem: {
		paddingLeft:10,
		paddingBottom: 10,
		alignItems: 'center',
		justifyContent: 'space-between',
		height: 70
	},
	temp: {
		paddingLeft: 2
	},
	weatherIcon: {
		width: 40,
		height: 30
	},
	rangeLow: {
		opacity: 0.5
	}
});
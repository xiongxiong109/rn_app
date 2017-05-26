// 每周列表
import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet
} from 'react-native';

import utils from '../../../utils';

const weather = [
	require('../../../img/clear.png'),
	require('../../../img/cloudy.png'),
	require('../../../img/pt_cloudy.png'),
	require('../../../img/rain.png'),
	require('../../../img/strom.png'),
]
const day = [];
for (let i = 0; i < 7; i++) {day.push(i);}

export default class WeeklyInfo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.item}>
					{day.map((item, idx) => (
						<View style={styles.weekDay} key={idx}>
							<Text style={[styles.ft, styles.week]}>星期一</Text>
							<Image source={weather[1]} style={styles.weatherIcon}/>
							<View style={styles.weatherTemp}>
								<Text style={[styles.ft, styles.temp]}>21</Text>
								<Text style={[styles.ft, styles.temp, {opacity: .5}]}>16</Text>
							</View>
						</View>	
					))}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 10,
		paddingRight: 10,
		borderBottomWidth: utils.halfPix / 2,
		borderBottomColor: 'rgba(255, 255, 255, .5)'
	},
	weekDay: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	weatherIcon: {
		width: 40,
		height: 30
	},
	weatherTemp: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	temp: {
		paddingLeft: 8
	},
	ft: {
		color: '#fff'
	}
});
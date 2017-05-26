// 天气卡片
import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView
} from 'react-native';

import BriefInfo from './briefInfo';
import OneDayInfo from './oneDayInfo';
import WeeklyInfo from './weeklyInfo';

import utils from '../../../utils';

export default class WeatherCard extends Component {
	render() {
		const bg = require('../../../img/w2.png');
		return (
			<View>
				<Image source={bg} style={styles.bg} />
				<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
					<BriefInfo />
					<OneDayInfo />
					<WeeklyInfo />
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	bg: {
		position: 'absolute',
		top: 0,
		left: 0
	},
	container: {
		height: utils.height - 84
	}
})
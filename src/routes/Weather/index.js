// 天气app
import React, { Component } from 'react';
import { 
	View,
	Text,
	Platform,
	Image,
	StyleSheet,
	TouchableHighlight
} from 'react-native';

import Swiper from 'react-native-swiper';
import WeatherCard from './components/weatherCard';

export default class Weather extends Component {

	static navigationOptions = {
		title: 'Weather'
	}

	render() {
		return (
			<View>
				<Swiper loop={false} >
					<WeatherCard/>
					<WeatherCard/>
				</Swiper>
			</View>
		)
	}
}
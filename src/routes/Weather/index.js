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

import axios from 'axios';

import Swiper from 'react-native-swiper';
import WeatherCard from './components/weatherCard';

export default class Weather extends Component {

	static navigationOptions = {
		title: 'Weather'
	}

	componentDidMount() {
		this.fetchData();
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

	fetchData() {
		axios
		.post('http://10.32.116.6:3000/apis/list', {})
		.then(this.fetchSucc)
		.catch(this.fetchErr)
	}
	fetchSucc(res) {
		alert('message');
		alert(res.data);
	}
	fetchErr(err) {
		alert(JSON.stringify(err));
	}
}
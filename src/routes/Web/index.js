// webview
import React, { Component } from 'react';

import {
	View,
	Text,
	WebView
} from 'react-native';

export default class WebPage extends Component {

	static navigationOptions = {
		title: '网页'
	}

	constructor(props) {
		super(props);
	}

	render() {
		const {state} = this.props.navigation;
		const {url} = state.params;
		return (
			<View style={{flex: 1}}>
				<WebView source={{uri: url}} scalesPageToFit={true} style={{backgroundColor: '#efefef', height: 200}}/>
			</View>
		)
	}
}
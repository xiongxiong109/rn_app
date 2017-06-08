// 主界面
import React, { Component } from 'react';
import {
	Animated,
	View,
	Text,
	TouchableOpacity,
	ListView,
	StyleSheet,
	Easing
} from 'react-native';

// import {NewsModel} from '../../model/news.model';
import FetchBtn from './containers/fetchBtn';
import ItemList from './containers/itemList';

// animate View
const AnimatedView = Animated.createAnimatedComponent(View);

// models
// let newsModel = new NewsModel();

export default class MainView extends Component {

	constructor(props) {
		super(props);
		this.state = {
			aniShowViewY: new Animated.Value(50),
			aniShowViewOpacity: new Animated.Value(0)
		}
	}

	componentDidMount() {
		this.aniShowPanel();
	}
	render() {
		return (
			<AnimatedView style={[styles.container, {
				opacity: this.state.aniShowViewOpacity,
				transform: [
					{
						translateY: this.state.aniShowViewY
					}
				]
			}]}>
			<FetchBtn />
			<ItemList {...this.props} />
			</AnimatedView>
		)
	}
	// show动画
	aniShowPanel() {
		Animated.timing(
			this.state.aniShowViewY,
			{
				toValue: 0,
				duration: 500,
				easing: Easing.elastic(1)
			}
		).start();
		Animated.timing(
			this.state.aniShowViewOpacity,
			{
				toValue: 1,
			}
		).start();
	}
	// fetchNews() {
		// newsModel.set({
		// 	q: '庄心妍',
		// 	start: 0,
		// 	count: 10
		// });
		// newsModel.go(this.fetchCallback);
	// }
	// fetchCallback(data) {
		// alert(JSON.stringify(data.musics));
	// }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee'
	}
})
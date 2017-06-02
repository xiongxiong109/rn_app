// 主界面
import React, { Component } from 'react';
import {
	Animated,
	View,
	TouchableOpacity,
	Text,
	Image,
	ListView,
	StyleSheet,
	Easing
} from 'react-native';

const AnimatedView = Animated.createAnimatedComponent(View);

export default class MainView extends Component {

	constructor(props) {
		super(props);
		this.state = {
			aniShowViewY: new Animated.Value(50),
			aniShowViewOpacity: new Animated.Value(0)
		}
	}
	componentDidMount() {
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
				<TouchableOpacity>
					<Text>Click</Text>
				</TouchableOpacity>
			</AnimatedView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee'
	}
})
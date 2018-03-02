import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	PixelRatio,
	Dimensions,
	TouchableOpacity
} from 'react-native';

// 当前页面导航
const navs = [
	{title: 'flex布局', path: 'FlexLayout'},
	{title: '计时器', path: 'Counter'},
	{title: '天气', path: 'Weather'},
	{title: '新闻', path: 'News'},
	{title: '自由拖拽', path: 'DragHand'},
	{title: '键盘与输入框', path: 'Keyboard'}
];

export default class Home extends Component {
	static navigationOptions = {
		title: 'study for RN'
	}
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log('x')
	}
	render() {
		return (
			<View style={styles.container}>
				{navs.map((nav, idx) => (
					<TouchableOpacity onPress={() => this.goNavigation(nav.path)} key={nav.title}>
						<View style={styles.item}>
							<Text style={styles.txt}>{nav.title}</Text>
						</View>
					</TouchableOpacity>
				))}
			</View>
		)
	}
	// 跳转路由
	goNavigation(nm) {
		this.props.navigation.navigate(nm);
	}
}

let { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		width: width,
		flexDirection: 'row',
		flexWrap: 'wrap',
		backgroundColor: '#ccc'
	},
	item: {
		width: width / 2,
		height: width / 2,
		alignItems: 'center',
		justifyContent: 'center',
		borderRightWidth: PixelRatio.get() / 4,
		borderBottomWidth: PixelRatio.get() / 4,
		borderColor: '#555',
		backgroundColor: '#dfdffd',
	},
	txt: {
		color: '#555'
	}
})
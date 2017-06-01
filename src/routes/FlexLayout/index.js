// flex layout
import React, { Component } from 'react';
import {
	View,
	ListView, // 当垂直滚动一组相同列表的时候, ListView可以替代ScrollView, 并能够提供更高效的滚动
	RefreshControl,
	Text,
	StyleSheet,
	Clipboard
} from 'react-native';

let arr = [];
for(let i = 0; i < 10; i++) {
	arr.push({idx: i});
}
let ds = new ListView.DataSource({
	rowHasChanged: (r1, r2) => r1 != r2
});

export default class FlexLayout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: ds.cloneWithRows(arr),
			isRefreshing: false
		}
	}
	componentDidMount() {
		this._getContent();
	}
	// 获取剪贴板是一个异步操作
	async _getContent() { 
		var content = await Clipboard.getString();
		alert(content)
	}
	render() {
		return (
			<View style={styles.flexLayer}>
				<View style={styles.bar}>
					<Text>title</Text>
				</View>
				<ListView
					style={styles.container}
					dataSource={this.state.dataSource}
					refreshControl={
						<RefreshControl
							refreshing={this.state.isRefreshing}
							onRefresh={() => {this._onRefresh()}}
						/>
					}
					renderRow={(item) => (
					<View style={styles.item}>
						<Text>Item: {item.idx}</Text>
					</View>
				)}/>
				<View style={styles.nav}>
					<Text>主页</Text>
					<Text>发现</Text>
					<Text>看点</Text>
					<Text>我的</Text>
				</View>
			</View>
		)
	}
	_onRefresh() {
		let _v = this;
		arr = [
			{idx: Math.random()},
			...arr
		];
		this.setState({
			isRefreshing: true
		});
		setTimeout(() => {
			this.setState({
				isRefreshing: false,
				dataSource: ds.cloneWithRows(arr)
			});
		}, 500);
	}
}

const styles = StyleSheet.create({
	// 要实现flex全屏布局, 首先父级要是flex:1
	// 
	flexLayer: {
		flex: 1
	},
	bar: {
		height: 50,
		backgroundColor: '#ddd',
		alignItems: 'center',
		justifyContent: 'center'
	},
	container: {
		backgroundColor: '#ccc',
		flex: 1
	},
	nav: {
		height: 40,
		backgroundColor: '#efefef',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	item: {
		padding: 10
	}
});
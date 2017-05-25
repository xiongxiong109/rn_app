// 计时列表
import React, { Component, PropTypes } from 'react';
import {
	ScrollView,
	View,
	Text,
	StyleSheet
} from 'react-native';

import utils from '../../../utils';

export default class TimeList extends Component {

	static propTypes = {
		time: PropTypes.shape({
			list: PropTypes.array
		})
	}

	render() {
		let { time } = this.props;
		return (
			<ScrollView style={styles.container} showsVerticalScrollIndicator ={false}>
				{time.list.map(item => (
					<View style={styles.item} key={ item.id }><Text>{item.time.toFixed(2)}</Text></View>
				))}
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		height: 150,
		backgroundColor: '#fefefe'
	},
	item: {
		paddingLeft: 10,
		paddingRight: 10,
		height: 50,
		borderBottomWidth: utils.halfPix / 2,
		alignItems: 'flex-end',
		justifyContent: 'center'
	}
});
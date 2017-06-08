// fetchBtn
import React, { Component, PropTypes } from 'react';

import {
	Text,
	TouchableOpacity
} from 'react-native';

export default class FetchBtn extends Component {

	static propTypes = {
		txt: PropTypes.string,
		fetchNews: PropTypes.func
	}

	static defaultProps = {
		txt: '获取'
	}

	render() {
		const { isFetching, txt, fetchNews, curPage, perPage } = this.props;
		return (
			isFetching ?
			<TouchableOpacity>
				<Text>获取中...</Text>
			</TouchableOpacity>:
			<TouchableOpacity onPress={() => fetchNews(curPage, perPage)}>
				<Text>{txt}</Text>
			</TouchableOpacity>
		)
	}
}
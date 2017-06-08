// itemList
import React, { Component } from 'react';

import {
	ListView,
	View,
	Text,
	Image,
	RefreshControl,
	TouchableOpacity,
	StyleSheet
} from 'react-native';

import utils from '../../../utils';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const Item = ({item, openView}) => (
	<TouchableOpacity onPress={openView}>
		<View style={styles.item}>
			<View>
				<Image style={styles.poster} source={{uri: item.image}} />
			</View>
			<View>
				<Text>{item.title}</Text>
			</View>
		</View>
	</TouchableOpacity>
);

export default class ItemList extends Component {

	static defaultProps = {
		list: []
	}

	constructor(props) {
		super(props);
	}

	render() {
		const { list, isFetching, fetchNews, curPage, perPage } = this.props;
		let dataSource = ds.cloneWithRows(list);
		return (
			<View>
				<ListView
					refreshControl={
						<RefreshControl
							refreshing={isFetching}
							onRefresh={() => {fetchNews(curPage, perPage)}}
						/>
					}
					dataSource={dataSource}
					renderRow={(item) => <Item item={item} openView={() => this.openView(item.mobile_link)}/>}
				/>
			</View>
		)
	}
	openView(url) {
		const { navigation } = this.props;
		navigation && navigation.navigate('Web', {url});
	}
}

const styles = StyleSheet.create({
	poster: {
		width: 80,
		height: 80
	},
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomWidth: utils.halfPix / 2,
		borderBottomColor: '#ccc',
		padding: 5
	}
});
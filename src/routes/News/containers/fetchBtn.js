import FetchBtn from '../components/fetchBtn';
import { connect } from 'react-redux';
import { NewsActs } from '../../../actions';

const mapStateToProps = (state) => ({
	...state.newsModule
});

const mapDispatchToProps = (dispatch) => ({
	// 异步获取数据
	fetchNews(cur, per) {
			dispatch(NewsActs.toggleFetch());
			dispatch(NewsActs.asyncFetchData(cur, per));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(FetchBtn);
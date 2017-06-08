// 新闻actions
import { NewsCsts } from '../consts';
import { NewsModel } from '../model/news.model';

const newsModel = new NewsModel();

export const toggleFetch = () => ({
	type: NewsCsts.TOGGLE_FETCH
});

export const updateList = (list) => ({
	type: NewsCsts.UPDATE_LIST,
	payload: {
		list
	}
})

// 异步actions, 在异步actions中触发同步reducer
export const asyncFetchData = (cur, per) => {
	return (dispatch) => {
		newsModel.set({
			q: '庄心妍',
			start: cur,
			count: per
		});
		newsModel.go((res) => {
			dispatch(toggleFetch());
			let { musics } = res;
			// alert(JSON.stringify(musics));
			dispatch(updateList(musics));
		})
	}
}
// news Reducers
import { v4 } from 'uuid';
import { combineReducers } from 'redux';
import { NewsCsts } from '../../consts';

const isFetching = (state = false, action) => {
	switch (action.type) {
		case NewsCsts.TOGGLE_FETCH:
			state = !state;
		break;
	}
	return state;
};
const txt = (state = '获取资源', action) => {
	switch (action.type) {
		case NewsCsts.TOGGLE_FETCH:
		break;
	}
	return state;
};

const list = (state = [], action) => {
	switch (action.type) {
		case NewsCsts.UPDATE_LIST:
			let { list } = action.payload;
			return [...list, ...state];
	}
	return state;
};

const curPage = (state = 0, action) => {
	switch (action.type) {
		case NewsCsts.UPDATE_LIST:
		return state + 1;
	}
	return state;
};
const perPage = (state = 10, action) => state;

export default newsModule = combineReducers({
	isFetching,
	txt,
	list,
	curPage,
	perPage
});
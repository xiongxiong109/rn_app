// 页面数据管理层
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import configStore from './configStore';

const store = createStore(reducers, configStore, applyMiddleware(thunk))

export default store;
// 页面数据管理层
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import configStore from './configStore';

const store = createStore(reducers, configStore)

export default store;
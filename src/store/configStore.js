// 默认配置参数

export default configStore = {
	// 计时器模块
	timeModule: {
		isRunning: false,
		curTime: 0,
		totalTime: 0,
		curCount: 0,
		list: []
	},
	// news 模块
	newsModule: {
		isFetching: false,
		txt: '获取资源',
		list: [],
		curPage: 0,
		perPage: 10
	}
}
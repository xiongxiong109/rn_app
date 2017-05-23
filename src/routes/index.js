// 页面路由
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Counter from './Counter';

const Routes = StackNavigator({
	Counter: {
		screen: Counter
	},
	Home: {
		screen: Home
	}
});

export default Routes;
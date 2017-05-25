// 页面路由
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Counter from './Counter';
import Weather from './Weather';

const Routes = StackNavigator({
	Home: {
		screen: Home
	},
	Counter: {
		screen: Counter
	},
	Weather: {
		screen: Weather
	}
});

export default Routes;
// 页面路由
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Counter from './Counter';
import Weather from './Weather';
import News from './News';

const Routes = StackNavigator({
	Home: {
		screen: Home
	},
	Counter: {
		screen: Counter
	},
	Weather: {
		screen: Weather
	},
	News: {
		screen: News
	}
});

export default Routes;
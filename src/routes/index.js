// 页面路由
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Counter from './Counter';
import Weather from './Weather';
import News from './News';
import FlexLayout from './FlexLayout';

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
	},
	FlexLayout: {
		screen: FlexLayout
	}
});

export default Routes;
// 页面路由
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Counter from './Counter';
import Weather from './Weather';
import News from './News';
import Web from './Web';
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
	Web: {
		screen: Web
	},
	FlexLayout: {
		screen: FlexLayout
	}
});
console.log('rn在window下的工程目录不能有中文名!!');
export default Routes;
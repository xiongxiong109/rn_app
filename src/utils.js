// 工具类
import { Dimensions, PixelRatio } from 'react-native';

// 物理像素
let halfPix = PixelRatio.get() / 2;
// 屏幕宽高
let { height, width } = Dimensions.get('window');

export default utils = {
	width,
	height,
	halfPix
}
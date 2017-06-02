// 启动页
import React, { Component } from 'react';
import {
  Animated,
  View,
  Image,
  Easing,
  StyleSheet
}
from 'react-native';

const AnimatedImage = Animated.createAnimatedComponent(Image);

export default class LaunchView extends Component {
	constructor(props) {
	  super(props);
	  // 注意，直接对正常的属性赋值new Animate.Value会报类型错误, 这一类的属性必须放在Animated.View里面
	  // 或者通过Animated.createAnimatedComponent方法将原组件包裹起来，组合成一个新的animate组件
	  this.state = {
	    launchOpacity: new Animated.Value(1), // 透明度变化
	    launchScale: new Animated.Value(5), // 放大
	    launchRotate: new Animated.Value(0) // 旋转
	  }
	}
	componentDidMount() {
	  // 执行启动动画
	  this.runLaunchAnimation();
	}
	render() {
		return (
			<Animated.View style={[styles.launch, {
			  opacity: this.state.launchOpacity
			}]}>
			  <AnimatedImage source = {require('../../img/clear.png')} style={[styles.map, {
			    transform: [
			      {scale: this.state.launchScale},
			      // 对于string类型数据的改变, 还可以使用interpolate插值方法, 将数值和字符串单位做一个映射
			      {rotate: this.state.launchRotate.interpolate({
			        inputRange: [0, 360],
			        outputRange: ['0deg', '360deg']
			      })}
			    ]
			  }]} />
			</Animated.View>
		)
	}

	runLaunchAnimation() {
	  // 透明度变化
	  Animated.timing(
	    this.state.launchOpacity,
	    {
	      toValue: 0,
	      duration: 1000,
	      delay: 500
	    }
	  ).start();
	  // 放大
	  Animated.timing(
	    this.state.launchScale,
	    {
	      toValue: 99,
	      duration: 1000,
	      delay: 500,
	      easing: Easing.bounce
	    }
	  ).start();
	  // 旋转
	  Animated.timing(
	    this.state.launchRotate,
	    {
	      toValue: 360,
	      duration: 1500
	    }
	  ).start();
	}
}

const styles = StyleSheet.create({
	launch: {
	  alignItems: 'center',
	  justifyContent: 'center',
	  backgroundColor: '#d00',
	  flex: 1
	},
	map: {
	  width: 50,
	  height: 50
	}
})
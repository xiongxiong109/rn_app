import React, { Component, PropTypes } from 'react';
import {
	View,
	StyleSheet,
	Image,
	Text,
	PanResponder // native手势组件的使用
} from 'react-native';

import Utils from '../../utils';

export default class DragHandler extends Component {
	static defaultProps = {
		// 本地的img需要先require,而不是用string, 再require
		ballImg: require('../../img/clear.png')
	}
	constructor() {
		super();
		this.state = {
			dx: 0,
			dy: 0,
      left: 0,
      top: 0,
			op: 1
		}
	}
	// panResponder实例要想在render的时候获取到, 需要写在willMount函数下
	componentWillMount() {
		// 创建PanResponder实例
		this._panResponder = PanResponder.create({
			// 要求成为响应者：
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      // 手势开始操作
      onPanResponderGrant: (evt, gestureState) => {
      	this.setState({
          op: 0.5
        });
      },
      onPanResponderMove: (evt, gestureState) => {
        this.setState({
          left: this.state.dx + gestureState.dx,
          top: this.state.dy + gestureState.dy
        });
      },
      // 手势释放
      onPanResponderRelease: (evt, gestureState) => this._moveEnd(evt, gestureState),
      // 其他组件成为了手势的响应者
      onPanResponderTerminate: (evt, gestureState) => this._moveEnd(evt, gestureState)
		})
	}
	render() {
		const {dx, dy, op} = this.state;
		return (
			<View style={styles.container}>
				<Text>offsetX: {dx}, offsetY: {dy}</Text>
				<Image
					// 可以通过传入ref来获取virtual dom
					ref={(ball) => {this.dragBall = ball;}}
					source={this.props.ballImg}
					style={[styles.ball, {
						opacity: op,
            left: this.state.left,
            top: this.state.top
					}]}
					{...this._panResponder.panHandlers}
				/>
			</View>
		)
	}
	_moveEnd(evt, gestureState) {
		let {dx, dy} = this.state;
    this.setState({
      op: 1,
      dx: dx + gestureState.dx,
      dy: dy + gestureState.dy
    })
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#00cc00'
	},
	ball: {
		width: 150,
		height: 150,
		position: 'absolute'
	}
});
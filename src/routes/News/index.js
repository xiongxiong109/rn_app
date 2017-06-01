import React, { Component } from 'react';
import {
  Animated,
  View,
  Text,
  Image,
  Easing,
  StyleSheet
}
from 'react-native';

import utils from '../../utils';

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launchOpacity: new Animated.Value(1) // 透明度变化
    }
  }
  componentDidMount() {
    // 执行启动动画
    this.runLaunchAnimation();
  }
  render() {
    return (
      <View style={styles.wrap}>
        <Animated.View style={[styles.launch, {
          opacity: this.state.launchOpacity
        }]}>
          <Image source = {require('../../img/clear.png')} style={styles.map} />
        </Animated.View>
       </View >
    );
  }
  runLaunchAnimation() {
    Animated.timing(
      this.state.launchOpacity,
      {
        toValue: 0,
        duration: 2000
      }
    ).start()
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1
  },
  launch: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#d00'
  },
  map: {
    width: 50,
    height: 50
  }
})
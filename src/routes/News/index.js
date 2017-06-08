import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
}
from 'react-native';

import LaunchView from './launch';
import MainView from './main';

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLaunch: true
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showLaunch: false
      });
    }, 1500);
  }
  render() {
    return (
      <View style={styles.wrap}>
        {
          this.state.showLaunch ?
          <LaunchView /> :
          <MainView {...this.props} />
        }
      </View >
    );
  }
  
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1
  }
})
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './src/app';

export default class study_rn extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('study_rn', () => study_rn);

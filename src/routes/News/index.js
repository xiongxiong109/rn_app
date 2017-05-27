import React, { Component } from 'react';
import {
	Animated,
	View,
	Text,
	Easing
} from 'react-native';

import utils from '../../utils';

export default class News extends Component {
   constructor(props) {
     super(props);
     this.state = {
       fadeAnim: new Animated.Value(0), // init opacity 0
     };
   }
   componentDidMount() {
     Animated.timing(          // Uses easing functions
       this.state.fadeAnim,    // The value to drive
       {
       		toValue: utils.width * .9,
       		duration: 1000,
       		easing: Easing.elastic(1)
       },           // Configuration
     ).start();      // Don't forget start!
   }
   render() {
     return (
       <View>
       	<Animated.View
       	  style={{
       	  	width: this.state.fadeAnim,
       	  	height: utils.halfPix,
       	  	backgroundColor: '#d00'
       	  }}>
       	</Animated.View>
       </View>
     );
   }
 }
// 键盘与输入框
import React, { Component } from 'react'
import Utils from '../../utils'
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

let { halfPix } = Utils

class KeyboardView extends Component {
  static navigationOptions = {
    title: '键盘与输入框'
  }
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.outerContainer}>
        <KeyboardAvoidingView style={styles.container}>
          <TextInput
            autoFocus={true}
            multiline={true}
            textAlignVertical={'top'}
            numberOfLines={5}
            placeholder={'placeholder'}
            style={styles.toolbar}
            underlineColorAndroid={'transparent'}
          ></TextInput>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#efefef'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  toolbar: {
    borderRadius: 5,
    borderWidth: 1,
    // height: 44,
    paddingHorizontal: 10
  }
})

export default KeyboardView
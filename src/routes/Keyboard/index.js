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
} from 'react-native'

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
      <KeyboardAvoidingView behavior='position'>
        <View style={styles.wrapper}>
          <ScrollView contentContainerStyle={styles.container}></ScrollView>
          <View style={styles.toolbar}>
            <TextInput></TextInput>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
  onKeyChange(e) {
    alert(e)
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    height: Utils.height - 80,
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    backgroundColor: '#efefef'
  },
  toolbar: {
    height: 80 / halfPix,
    backgroundColor: '#ccc'
  }
})

export default KeyboardView
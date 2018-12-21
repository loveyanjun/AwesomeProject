import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import Button from '../components/button/index'

export default class TestComponent extends React.PureComponent {
  state = {
    // modalVisible: false,
    // inputValue: 'sss'
  }

  render() {
    return (
      <View style={styles.test}>
        <Text>Touch相关</Text>
        <Button/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  test: {
    marginTop: 100
  }
})

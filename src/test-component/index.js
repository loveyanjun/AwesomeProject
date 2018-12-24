import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import Button from '../components/button/index'

export default class TestComponent extends React.PureComponent {
  state = {
    // modalVisible: false,
    // inputValue: 'sss'
  }

  handleBtn = () => {
    console.log('handleBtn')
  }

  render() {
    return (
      <View style={styles.test}>
        <Text>Touch相关</Text>
        <Button style={styles.testButton} onPress={this.handleBtn}>点击</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  test: {
    marginTop: 100
  },
  testButton: {
    // width: 200,
    width: '100%',
    backgroundColor: '#f9f'
  }
})

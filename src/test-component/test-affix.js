import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import Affix from '../components/affix/index'

export default class TestComponent extends React.PureComponent {
  handleBtn = () => {
    console.log('handleBtn')
  }

  render() {
    return (
      <View style={styles.test}>
        <Text>Touch相关</Text>
        <Affix>置顶</Affix>
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

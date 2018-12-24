import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../components/button/index'

export default class TestComponent extends React.PureComponent {

  handleBtn = () => {
    console.log('handleBtn')
  }

  render() {
    return (
      <View style={styles.test}>
        <Text>button:</Text>
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
    // width: '100%',
    backgroundColor: '#f9f'
  }
})

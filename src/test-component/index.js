import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
// import FlatListTest from '../project-components/flatlist/index'
// import FlatListScrollTo from '../project-components/flatlist-scroll-to/index'
import FlatListRefresh from '../project-components/flatlist-refresh/index'

export default class TestComponent extends React.PureComponent {

  handleBtn = () => {
    console.log('handleBtn')
  }

  render() {
    return (
      <View style={styles.test}>
        <Text>列表相关</Text>
        <FlatListRefresh />
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

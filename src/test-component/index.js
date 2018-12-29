import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
// import FlatListTest from '../project-components/flatlist/index'
// import FlatListScrollTo from '../project-components/flatlist-scroll-to/index'
// import FlatListRefresh from '../project-components/flatlist-refresh/index'
// import CssProps from '../project-components/css-props/index'
import ImageTest from '../project-components/test-image/index'

export default class TestComponent extends React.PureComponent {

  handleBtn = () => {
    console.log('handleBtn')
  }

  render() {
    return (
      <View style={styles.test}>
        <Text>列表相关</Text>
        <ImageTest />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  test: {
    marginTop: 100,
    marginBottom: 10
  },
  testButton: {
    width: '100%',
    backgroundColor: '#f9f'
  }
})

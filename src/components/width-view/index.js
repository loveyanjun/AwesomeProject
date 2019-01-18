import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
const { width } = Dimensions.get('window')

export default class WView extends React.PureComponent {
  static propTypes = {
    children: PropTypes.element,
    mariginHorizontal: PropTypes.number,
    style: PropTypes.object
  }

  render() {
    const { children, mariginHorizontal, style } = this.props
    return (
      <View
        style={[
          styles.wView,
          { width: (width - 2 * mariginHorizontal) / 2 },
          style
        ]}>
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wView: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

// 例子地址: src/modules/test-1.js

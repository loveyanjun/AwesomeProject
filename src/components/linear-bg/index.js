import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

/*
实践例子地址： project-compoennt / test-linear-bg
*/

export default class LinearBg extends React.PureComponent {
  static propTypes = {
    colors: PropTypes.array,
    style: PropTypes.object,
    children: PropTypes.oneOfType(PropTypes.string, PropTypes.element)
  }

  render() {
    const { colors, children, style } = this.props
    return (
      <LinearGradient colors={colors} style={[styles.linearbg, style]}>
        {typeof children === 'string' ? (
          <Text>{children}</Text>
        ) : (
          <View>{children}</View>
        )}
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  linearbg: {
    padding: 10
  }
})
import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
/*
实践地址： project-components / test-options
*/
export default class Options extends React.PureComponent {
  static propTypes = {
    id: PropTypes.number,
    options: PropTypes.array,
    handleSelect: PropTypes.func
  }

  handleSelected = option => {
    console.log(option)
    this.props.handleSelect(option)
  }
  render() {
    const { options, id } = this.props

    return (
      <View style={styles.select}>
        {options.map(option => (
          <TouchableOpacity
            key={option.id}
            activeOpacity={0.6}
            onPress={() => this.handleSelected(option)}>
            <View style={styles.option}>
              <Text>{option.name}</Text>
              {option.id === id ? (
                <Image source={require('assets/back.png')} />
              ) : (
                <Image source={require('assets/close.png')} />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  select: {},
  option: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

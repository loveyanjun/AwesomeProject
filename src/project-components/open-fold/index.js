import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class OpenFold extends React.PureComponent {
  description =
    '产品投资收益期限为365天，自购买日开始计息，到期之后自动失效；产品投资收益期限为365天，自购买日开始计息，到期之后自动失效；产品投资收益期限为365天，自购买日开始计息，到期之后自动失效；产品投资收益期限为365天，自购买日开始计息，到期之后自动失效；产品投资收益期限为365天，自购买日开始计息，到期之后自动失效；产品投资收益期限为365天，自购买日开始计息，到期之后自动失效；产品投资收益期限为365天，自购买日开始计息，到期之后自动失效；产品投资收益期限为365天，自购买日开始计息，到期之后自动失效；产品投资收益期限为365天，自购买日开始计息，到期之后自动失效；产品投资收益期限为365天，自购买日开始计息，到期之后自动失效；产品投资收益期限为365天，自购买日开始计息，到期之后自动失效；产品投资收益期限为365天，自购买日开始计息，到期之后自动失效；'

  state = {
    open: false
  }

  handleOpenFold = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { open } = this.state
    return (
      <View style={styles.openFold}>
        {open ? (
          <Text style={styles.description}>{this.description}</Text>
        ) : (
          <Text style={styles.description} numberOfLines={3}>
            {this.description}
          </Text>
        )}
        <TouchableOpacity style={styles.button} onPress={this.handleOpenFold}>
          <Text style={styles.openTxt}>{open ? '收起' : '查看全部'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  openFold: {
    paddingLeft: 50,
    paddingRight: 20
  },
  description: {
    lineHeight: 18
  },
  button: {
    marginTop: 10,
    alignItems: 'flex-end'
  },
  openTxt: {
    color: 'blue',
    fontSize: 16
  }
})

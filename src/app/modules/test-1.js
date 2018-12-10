import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import WView from 'components/width-view'
import __ from 'utils/i18n'

export default class Test extends React.PureComponent {
  render() {
    return (
      <View style={styles.total}>
        <WView style={styles.totalItem} mariginHorizontal={30}>
          <Text style={styles.totalLabel}>{__('昨日收益(AEC)')}</Text>
          <Text
            style={styles.totalValue}
            numberOfLines={1}
            adjustsFontSizeToFit>
            0.329749247892
          </Text>
        </WView>
        <View style={styles.line} />
        <WView style={styles.totalItem} mariginHorizontal={30}>
          <Text style={styles.totalLabel}>{__('累计收益(AEC)')}</Text>
          <Text
            style={styles.totalValue}
            numberOfLines={1}
            adjustsFontSizeToFit>
            3234242.32323
          </Text>
        </WView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0,0,0,0.05)'
  },
  line: {
    width: 1,
    height: 42,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#966DE7'
  },
  totalItem: {
    backgroundColor: '#f0f'
    // width: (width - 2 * 30) / 2,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  totalLabel: {
    color: '#fff',
    fontSize: 15
  },
  totalValue: {
    color: '#fff',
    fontSize: 25
  }
})

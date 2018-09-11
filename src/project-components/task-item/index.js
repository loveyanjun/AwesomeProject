import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import ItemAction from '../item-action'
import last from 'lodash/last'

export default class TaskItem extends React.PureComponent {
  static propTypes = {
    item: PropTypes.object,
    handleAction: PropTypes.func,
    data: PropTypes.array
  }

  render () {
    const { title, reward, body, isComplete, uri, taskBtn, taskId } = this.props.item
    const { handleAction, data } = this.props

    return <View style={styles.taskItem}>
      <View style={styles.itemLine}>
        <View style={styles.lineCircle} />
        <View style={[styles.line, taskId === last(data).taskId ? styles.lastItem : styles.noLastItem]} />
      </View>
      <View style={styles.itemContent}>
        <View style={styles.itemHeader}>
          <Text style={styles.itemTitle}>{title}</Text>
          <View style={styles.itemReward}>
            <Image style={styles.itemDiamond} source={require('images/rn_diamond.png')} />
            <Text style={styles.itemRewardTxt}>
                +{parseInt(reward)}
                KAA
            </Text>
          </View>
        </View>
        <ItemAction body={body} completeStatus={isComplete} uri={uri} handleAction={handleAction} taskBtn={taskBtn} />
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  taskItem: {
    // width: 150,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  itemLine: {
    alignItems: 'center'
  },
  lineCircle: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderColor: '#f0f0f0',
    borderStyle: 'solid',
    borderRadius: 12
  },
  line: {
    width: 1,
    flex: 1,
    backgroundColor: '#f0f0f0'
  },
  lastItem: {
    marginBottom: 21
  },
  noLastItem: {
    marginBottom: 0
  },
  itemContent: {
    marginLeft: 10,
    marginBottom: 22,
    flex: 1
  },
  itemHeader: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemTitle: {
    fontSize: 15,
    color: '#333',
    fontWeight: 'bold'
  },
  itemReward: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemDiamond: {
    width: 14,
    height: 13
  },
  itemRewardTxt: {
    marginLeft: 5,
    fontSize: 13,
    color: '#ed6a10'
  }
})

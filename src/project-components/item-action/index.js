import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
// import { navigateToNative } from 'utils/native'

export default class ItemAction extends React.PureComponent {
  static propTypes = {
    body: PropTypes.string,
    uri: PropTypes.string,
    completeStatus: PropTypes.string,
    taskBtn: PropTypes.string,
    handleAction: PropTypes.func
  }

  handleOperate = () => {
    const { uri, handleAction, completeStatus } = this.props
    if (completeStatus === '0') {
      if (!uri) {
        handleAction()
      } else {
        console.log(completeStatus)
        // navigateToNative(uri)
      }
    }
  }

  render () {
    const { body, completeStatus, taskBtn } = this.props

    return (
      <View style={styles.itemAction}>
        <View style={styles.itemContent}>
          <Text style={styles.itemDescription}>{body}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={[styles.itemOperate, completeStatus === '0' ? styles.uncomplete : styles.complete]} onPress={this.handleOperate}>
          <Text style={styles.actionButton}>{completeStatus === '0' ? taskBtn : '已完成'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemAction: {
    backgroundColor: 'rgba(248,248,248,1)',
    paddingTop: 14,
    paddingRight: 10,
    paddingBottom: 14,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemContent: {
    flex: 1,
    marginRight: 10
  },
  itemDescription: {
    color: '#999',
    fontSize: 13,
    lineHeight: 18
  },
  itemOperate: {
    width: 63,
    height: 25,
    borderRadius: 13
  },
  actionButton: {
    color: '#fff',
    textAlign: 'center',
    lineHeight: 25,
    fontSize: 12
  },
  complete: {
    backgroundColor: '#d9d9d9'
  },
  uncomplete: {
    backgroundColor: '#ed6a10'
  }
})

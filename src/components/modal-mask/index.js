import React from 'react'
import PropTypes from 'prop-types'
import { View, Modal, StyleSheet } from 'react-native'

/*
实践实例：test-component / test-mask-modal
*/

export default class MaskModal extends React.PureComponent {
  static propTypes = {
    visible: PropTypes.bool,
    children: PropTypes.element
  }

  handleRequestClose = () => {
    console.log('handleRequestClose')
  }

  render() {
    const { visible, children } = this.props

    return (
    <Modal
      transparent
      animationType={"slide"}
      visible={visible}
      onRequestClose={this.handleRequestClose}>
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            {children}
          </View>
        </View>
    </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#000',
    opacity: 0.5
  },
  modalContent: {
    backgroundColor: '#fff',
    marginTop: 100
  }
})

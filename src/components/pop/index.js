import React from 'react'
import PropTypes from 'prop-types'
import {
    View,
    Modal,
    StyleSheet
} from 'react-native'

export default class Pop extends React.PureComponent {
    static propTypes = {
        children: PropTypes.element,
        visible: PropTypes.bool
    }

    handleRequestClose = () => {
        console.log('handleRequestClose')
    }

    render () {
        const { children, visible } = this.props

        return (
            <Modal
                visible={visible}
                transparent
                animationType={'slide'}
                onRequestClose={this.handleRequestClose}>
                <View style={styles.maskModal}>
                    <View style={styles.maskContent}>
                        {children}
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    maskModal: {
        flex: 1,
        backgroundColor: '#000',
        opacity: 0.5,
        justifyContent: 'flex-end'
    },
    maskContent: {
        backgroundColor: '#fff'
    }
})
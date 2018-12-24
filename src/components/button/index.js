import React from 'react'
import PropTypes from 'prop-types'
import {
    View,
    Text,
    // TouchableHighlight,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

export default class Button extends React.PureComponent {
    static propTypes = {
        style: PropTypes.object,
        disabled: PropTypes.bool,
        children: PropTypes.oneOfType(PropTypes.string, PropTypes.element),
        onPress: PropTypes.func
    }

    handlePress = () => {
        const { disabled } = this.props
        if (disabled) {
            return
        } else {
            this.props.onPress()
        }
    }

    render () {
        const { style, disabled, children } = this.props

        return (
            <TouchableOpacity 
            activeOpacity={0.7} 
            style={[styles.button, style, disabled && styles.disableBtn]}
            onPress={this.handlePress}>
                {typeof(children) === 'string' ? (
                <Text style={styles.buttonTxt}>{children}</Text>
                ) : (
                    <View>{children}</View>
                )}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1890ff',
        borderRadius: 5
    },
    buttonTxt: {
        color: '#fff'
    },
    disableBtn: {
        backgroundColor: '#d9d9d9'
    }
})
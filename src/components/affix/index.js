import React from 'react'
import PropTypes from 'prop-types'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

export default class Affix extends React.PureComponent {
    static propTypes = {
        children: PropTypes.oneOfType(PropTypes.string, PropTypes.element)
    }

    render () {
        const { children } = this.props

        return (
            <TouchableOpacity activeOpacity={0.8} style={styles.affix}>
            {typeof(children) === 'string' ? (
                <Text style={styles.affixTxt}>{children}</Text>
            ) : (
            <View>
                {children}
            </View>
            )}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    affix: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1890ff'
    },
    affixTxt: {
        color: '#fff'
    }
})
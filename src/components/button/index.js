import React from 'react'
import PropTypes from 'prop-types'
import {
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

export default class Button extends React.PureComponent {
    static propTypes = {

    }

    render () {
        return (
            <TouchableHighlight style={styles.button}>
                {/* <View></View> */}
                <Text>按钮</Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        
    }
})
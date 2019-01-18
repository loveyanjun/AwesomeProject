import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import LinearBg from '../../components/linear-bg'

export default class TestLinearBg extends React.PureComponent {
    handleTouch = () => {
        console.log('touch')
      }

    render () {
        return (
            <View>
                <LinearBg colors={['red', 'yellow']} style={styles.linear}>xxxx</LinearBg>

                <LinearBg colors={['red', 'orange']} style={styles.linear}>
                    <View>
                        <Text>含有view元素</Text>
                    </View>
                </LinearBg>

                <TouchableOpacity activeOpacity={0.6} onPress={this.handleTouch}>
                    <LinearBg colors={['red', 'orange']} style={styles.linear}>
                    <Text>按钮</Text>
                    </LinearBg>
                </TouchableOpacity>
            </View>
        )
    }
}
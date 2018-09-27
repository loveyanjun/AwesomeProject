import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class Detail extends React.PureComponent {
    render () {
        console.log('detail....')
        console.log(this.props.navigation)
        return (
            <View>
                <Text>详情页面</Text>
            </View>
        )
    }
}
import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class Detail extends React.PureComponent {
    static navigationOptions = {
        title: '详情页'
    }

    render () {
        return (
            <View>
                <Text>详情页面</Text>
            </View>
        )
    }
}
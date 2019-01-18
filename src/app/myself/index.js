import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import List from './list'
import Qrcode from './qrcode'

const MyselfStack = createStackNavigator({
    List: {
        screen: List
    },
    Qrcode: {
        screen: Qrcode
    }
})

export default class Myself extends React.PureComponent {
    render () {
        return (
            <MyselfStack />
        )
    }
}
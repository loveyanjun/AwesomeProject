import React from 'react'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
    StyleSheet
} from 'react-native'
import Home from './home'
import Company from './company'
import Message from './message'
import Myself from './myself'


// const RootStack = createBottomTabNavigator({
//     Home,
//     Company,
//     Message,
//     Myself
// }, {
//     initialRouteName: 'Home'
// })

// const RootStack = createBottomTabNavigator({
//     '首页': Home,
//     '公司': Company,
//     '消息': Message,
//     '我的': Myself
// }, {
//     initialRouteName: '首页',
//     navigationOptions: ({navigation}) => ({
//         // title: 'shouye',
//         tabBarIcon: ({focused, tintColor}) => {
//             // return <Ionicons name='earth' color='#eee'/>
//             return <Ionicons name="ios-globe" size={25} color={tintColor} />
//         }
//     })
// })

const RootStack = createBottomTabNavigator({
    '首页': createStackNavigator({
        screen: Home
    }),
    '公司': createStackNavigator({
        screen: Company
    }),
    '消息': createStackNavigator({
        screen: Message
    }),
    '我的': createStackNavigator({
        screen: Myself
    }, {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                return <Ionicons name="ios-home" />
            }
        })
    })
}, {
    initialRouteName: '首页',
    navigationOptions: ({navigation}) => ({
        // title: 'shouye',
        tabBarIcon: ({focused, tintColor}) => {
            return <Ionicons name='earth' color='#eee'/>
        }
    })
})

export default class Root extends React.PureComponent {
    render () {
        return (
            <RootStack style={styles.container}/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100
    }
})


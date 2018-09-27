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
import Detail from './home/detail'


// const RootStack = createBottomTabNavigator({
//     Home,
//     Company,
//     Message,
//     Myself
// }, {
//     initialRouteName: 'Home'
// })

// const RootStack = createBottomTabNavigator({
//     '职位': Home,
//     '公司': Company,
//     '消息': Message,
//     '我的': Myself
// }, {
//     initialRouteName: '职位',
//     navigationOptions: ({navigation}) => ({
//         // title: 'shouye',
//         tabBarIcon: ({focused, tintColor}) => {
//             // return <Ionicons name='earth' color='#eee'/>
//             return <Ionicons name="ios-globe" size={25} color={tintColor} />
//         }
//     })
// })

const RootStack = createBottomTabNavigator({
    '职位': createStackNavigator({
        screen: Home
    }, {
        headerMode: 'screen',
        navigationOptions: ({navigation}) => ({
            // title: 'web前端',
            headerTitle: 'web前端',
            headerStyle: {
                backgroundColor: '#52cbc5'
            },
            headerTintColor: '#fff'
        })
        // navigationOptions: {
        //     title: '教育',
        //     tabBarIcon: ({tintColor}) => (<Ionicons name="ios-home" />)
        // }
    }),
    // '职位': {
    //     screen: Home,
    //     navigationOptions: ({navigation}) => ({
    //         title: '职位信息',
    //         headerTitlel: 'haha'
    //     })
    // },
    '公司': createStackNavigator({
        screen: Company
    }),
    '消息': createStackNavigator({
        screen: Message
    }),
    '我的': createStackNavigator({
        screen: Myself,
        navigationOptions: ({navigation}) => ({
            title: '我我我'
            // tabBarIcon: ({focused, tintColor}) => {
            //     return <Ionicons name="ios-home" />
            // }
        })
    }, {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                return <Ionicons name="ios-home" />
            }
        })
    })
}, {
    initialRouteName: '职位',
    navigationOptions: ({navigation}) => ({
        // title: '首页',
        tabBarIcon: ({focused, tintColor}) => {
            const {routeName} = navigation.state
            if (routeName === '职位') {
                return <Ionicons name="ios-globe" size={25} />
            } else if (routeName === '公司') {
                return <Ionicons name="ios-business" size={25} color={tintColor} />
            } else if (routeName === '消息') {
                return <Ionicons name="ios-infinite" size={25} />
            } else if (routeName === '我的') {
                return <Ionicons name="ios-woman" size={25} />
            }
            // return <Ionicons name="ios-globe" size={25} color={tintColor} />
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


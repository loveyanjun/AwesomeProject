import React from 'react'
import { createTabNavigator, createDrawerNavigator } from 'react-navigation'
import {
    StyleSheet
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from './home/index'
import Work from './work/index'
import Life from './life/index'
import Direction from './direction/index'

const RootStack = createTabNavigator({
    Home,
    // Working: Work,  // Working默认为tab的标题
    Work,
    Life
}, {
    initialRouteName: 'Home',
    // navigationOptions: ({navigation}) => {
    //     console.log('navigation:')
    //     console.log(navigation)
    //     return {
    //         // title: '共享标题' // Geenie: 表示底部的名称
    //     }
    // }
    navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => {
            const { routeName } = navigation.state
            console.log('routName:')
            console.log(tintColor)
            // console.log(navigation.state)
            // let iconNmae = 'mmmm'
            // if (routeName === 'Home') {
            //     iconNmae = `ios-infornation-ciircle${focused ? '' : '-outline'}`
            // } else if (routeName === 'Work') {
            //     iconNmae = `ios-options${focused ? '' : '-outline'}`
            // }
            return <Ionicons name="ios-add" size={25} color={tintColor} />
        }
    }),
    tabBarOptions: {
        activeTintColor: '#f0f',
        inactiveTintColor: '#0f0'
    }
})

// Geenie: 验证Drawer navigation
// const RootStack = createDrawerNavigator({
//     Home: Home,
//     Direction: Direction
// })


export default class Root extends React.PureComponent {
    render () {
        return (
            <RootStack style={styles.container}/>
        )
    }
}

// tabBarIcon: 函数所带的一个参数是个object，该object中包含了focused，tintColor

const styles = StyleSheet.create({
    container: {
        paddingTop: 100
    }
})
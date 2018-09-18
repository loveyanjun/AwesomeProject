import React, { Component } from 'react'
import { Calendar } from 'react-native-calendars'
import { createStackNavigator } from 'react-navigation'
import Home from '../components/home/index'
import Detail from '../components/detail/index'

const RootStack = createStackNavigator(
    {
        // Home: {
        //     sreen: Home
        // }
        Home: Home, // 路由：路由配置
        Details: Detail
    }, 
    {
    initialRouteName: 'Home' // 这里的Home指的是对应的路由，不是路由配置
}
)

export default class APP extends Component {
    render () {
        return (
            <RootStack />
        )
    }
}
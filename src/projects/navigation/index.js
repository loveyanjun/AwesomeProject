import React, { Component } from 'react'
import { Calendar } from 'react-native-calendars'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Home from './home/index'
import Detail from './detail/index'
import SignIn from './sign/index'
import Loading from './loading/index'

const RootStack = createStackNavigator(
    {
        // Home: {
        //     sreen: Home
        // }
        Home: Home, // 路由：路由配置
        Details: Detail
    }, 
    {
    initialRouteName: 'Home', // 这里的Home指的是对应的路由，不是路由配置
    navigationOptions: {
        title: '共享标题',
        headerStyle: {
            backgroundColor: '#42b983'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }
    // mode: 'modal'
})

const AuthStack = createStackNavigator({
    SignIn: SignIn
})

export default createSwitchNavigator(
    {   
        AppLoading: Loading,
        App: RootStack,
        Auth: AuthStack
    },
    {
        initialRouteName: 'AppLoading'
    }
)

// export default class APP extends Component {
//     render () {
//         return (
//             <RootStack />
//         )
//     }
// }
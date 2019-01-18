import React from 'react'
// import {
//     View,
//     Text,
//     StyleSheet
// } from 'react-native'

import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './home'

const navigators = createStackNavigator({
    Home: {
        screen: HomeScreen
    }
}, {
    initialRouteName: 'Home'
})

// export default createStackNavigator({
//     Home: HomeScreen
// }, {
//     initialRouteName: 'Home'
// })

const App = createAppContainer(navigators)
export default App
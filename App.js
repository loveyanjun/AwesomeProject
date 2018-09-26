import React, { Component } from 'react'
import { View, Text } from 'react-native'
// import Hello from '../src/modules/hello'

export default class HelloWord extends Component {
    render () {
        return (
            <View>
                <Text>Hello world</Text>
                <Text>插件安装</Text>
                {/* <Hello></Hello> */}
            </View>
        )
    }
}

import { AppRegistry } from 'react-native'
import App from './src/modules'

AppRegistry.registerComponent('awesomeProject', () => APP)

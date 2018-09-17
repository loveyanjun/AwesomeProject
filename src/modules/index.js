import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    Button,
    DatePickerIOS,
    TabBarIOS,
    TabBarIOSItem
    // TabBarIOSItem
} from 'react-native'
import { Calendar } from 'react-native-calendars'
// import Hello from './hello'
import SectionList from '../components/sectionList/index'

export default class HelloWord extends Component {
    pressButton = () => {
        console.log('pressbutton')
    }

    handleDate = () => {
        console.log('handleDate')
    }

    handleTabBarPress = () => {
        alert('handbarperess')
    }

    render () {
        return (
            <View style={styles.container}>
                <SectionList />
                <TabBarIOS>
                    <TabBarIOS.Item title='推荐' onPress={this.handleTabBarPress}>
                        推荐
                    </TabBarIOS.Item>
                    <TabBarIOS.Item title='重庆'>重庆</TabBarIOS.Item>
                    <TabBarIOS.Item title='公司'>公司</TabBarIOS.Item>
                    <TabBarIOS.Item title='要求'>要求</TabBarIOS.Item>
                </TabBarIOS>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1,
        justifyContent: 'flex-start'
    },
    activityIndicator: {
        backgroundColor: '#ea8672'
    },
    button: {
        backgroundColor: '#93f47b'
    },
    datePickerIos: {
        backgroundColor: '#fc92f1'
    },
    tabBar: {
        flex: 1,
        flexDirection:  'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})
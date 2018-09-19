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
import MyLinearGradient from '../myLinearGradient/index'

export default class Root extends Component {
    static navigationOptions = {
        title: '主页'
    }

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
        console.log('1121')
        console.log(this.props)
        return (
            <View style={styles.container}>
                <MyLinearGradient />
                {/* 路由跳转 */}
                {/* <Button title='Go to Detail' onPress={()=> this.props.navigation.navigate('Details')}/> */}
                {/* <Button title='Go to Detail' onPress={()=> this.props.navigation.push('Details')}/> */}
                <Button title='Go to Detail!' onPress={()=> this.props.navigation.push('Details', {
                itemId: 12,
                type: 'xxx'
                // title: '详情页面展示了'
                })}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
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
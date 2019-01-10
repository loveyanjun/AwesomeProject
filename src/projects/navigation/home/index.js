import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    AsyncStorage,
    Button,
    // DatePickerIOS,
    // TabBarIOS,
    // TabBarIOSItem
    // TabBarIOSItem
} from 'react-native'
import { Calendar } from 'react-native-calendars'
// import MyLinearGradient from '../myLinearGradient/index'


export default class Root extends Component {
    static navigationOptions = {
        title: 'Welcome to the app'
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

    _showMoreApp = () => {
        this.props.navigation.navigate('Other')
    }

    _signOut = async () => {
        await AsyncStorage.clear()
        this.props.navigation.navigate('AppLoading')
    }

    render () {
        console.log('1121')
        console.log(this.props)
        return (
            <View style={styles.container}>
                <Text>主页面内容</Text>
                {/* <MyLinearGradient /> */}
                {/* 路由跳转 */}
                {/* <Button title='Go to Detail' onPress={()=> this.props.navigation.navigate('Details')}/> */}
                {/* <Button title='Go to Detail' onPress={()=> this.props.navigation.push('Details')}/> */}

                {/* <Button title='Go to Detail!' onPress={()=> this.props.navigation.push('Details', {
                itemId: 12,
                type: 'xxx',
                title: '详情页面展示了'
                })}/> */}

                <Text>----------------分割线-----------------</Text>
                <Text>验证createSwitchStack</Text>
                
                <View>
                    <Button title='start to show the app' color='#ea8672' onPress={this._showMoreApp}/>
                    <Button title='退出' color='#fc92f1' onPress={this._signOut} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
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

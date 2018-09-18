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
                {/* <View>
                <LinearGradient
                    style={styles.spot}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    colors={['#f0924a', '#f6c475']} />
                </View> */}
                <MyLinearGradient />
                {/* <TabBarIOS>
                    <TabBarIOS.Item title='推荐' onPress={this.handleTabBarPress}>
                        推荐
                    </TabBarIOS.Item>
                    <TabBarIOS.Item title='重庆'>重庆</TabBarIOS.Item>
                    <TabBarIOS.Item title='公司'>公司</TabBarIOS.Item>
                    <TabBarIOS.Item title='要求'>要求</TabBarIOS.Item>
                </TabBarIOS> */}
                <Button title='Go to Detail' onPress={()=> this.props.navigation.navigate('Details')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f',
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
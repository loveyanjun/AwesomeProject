import React from 'react'
import {
    View,
    Text,
    Button,
    AsyncStorage,
    StyleSheet
} from 'react-native'

export default class Sign extends React.PureComponent {
    _handleLogin = async () => {
        await AsyncStorage.setItem('userToken', 'login success')
        this.props.navigation.navigate('App')
    }

    render () {
        return (
            <View>
                <Text>登录界面</Text>
                <Button title="登录" color='bule' onPress={this._handleLogin}/>
            </View>
        )
    }
}
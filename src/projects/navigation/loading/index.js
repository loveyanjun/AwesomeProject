import React from 'react'
import {
    View,
    Text,
    Button,
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet
} from 'react-native'

export default class Loading extends React.PureComponent {
    constructor(props) {
        super(props)
        this._bootstrapAsync()
    }

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken')
        console.log('userToken:')
        console.log(userToken)
        console.log(AsyncStorage)
        this.props.navigation.navigate(userToken ? 'App' : 'Auth')
    }
    
    render () {
        return (
            <View style={styles.loading}>
                <ActivityIndicator color='#0f0' size='large' />
                <StatusBar barStyle="default" />
                <Text>loading页面，做信息验证</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loading: {
        paddingTop: 100
    }
})


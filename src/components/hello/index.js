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

export default class HelloWord extends Component {
    pressButton = () => {
        console.log('pressbutton')
        alert('button')
    }

    handleDate = () => {
        console.log('handleDate')
        alert('date')
    }

    render () {
        return (
            <View style={styles.container}>
                <View>
                    <Text>Hello world</Text>
                </View>
                {/* <View style={styles.activityIndicator}>
                    <Text>ActivityIndicator练习</Text>
                    <ActivityIndicator size='large' color='#f0f' animating={false}></ActivityIndicator>
                    <ActivityIndicator size='small' color='red' style={{backgroundColor: '#0f0'}}></ActivityIndicator>
                    <ActivityIndicator size='large' color='#b0f' hidesWhenStopped></ActivityIndicator>
                </View>
                <View style={styles.button}>
                    <Button title='woshibutton' color='#841584' onPress={this.pressButton} />
                    <Button title='woshibutton' disabled />
                    <Button title='woshibutton' testID='xxxx' />
                    <Button title='I am Button' />
                </View>
                <View style={styles.datePickerIos}>
                    <DatePickerIOS
                        date={new Date()}
                        onDateChange={this.handleDate} />
                </View> */}
                {/* <View>
                    <Calendar />
                </View> */}
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
    }
})
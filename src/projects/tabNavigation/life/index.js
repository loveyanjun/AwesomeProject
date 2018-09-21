import React from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'

export default class Life extends React.PureComponent {
    render () {
        return (
            <View>
                <Text>生活</Text>
                <Button title='Go to Home' onPress={()=>this.props.navigation.navigate('Home')}/>
            </View>
        )
    }
}
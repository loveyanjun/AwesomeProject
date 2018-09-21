import React from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'

export default class Work extends React.PureComponent {
    render () {
        return (
            <View>
                <Text>工作</Text>
                <Button title='Go to Home' onPress={()=>this.props.navigation.navigate('Home')} />
            </View>
        )
    }
}
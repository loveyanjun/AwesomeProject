import React from 'react'
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet
} from 'react-native'

export default class Direction extends React.PureComponent {
    static navigationOptions = {
        drawerLabel: 'direction',
        drawerIcon: ({ tintColor}) => (
            <Image style={[styles.icon, { tintColor: tintColor }]} source={require('../images/dog.jpg')} />
        )
    }

    render () {
        return (
            <View style={styles.direction}>
                <Text>目录</Text>
                <Button title="Go to Home from Direction" color='#0f0' onPress={()=>this.props.navigation.navigate('Home')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    direction: {
        paddingTop: 100
    },
    icon: {
        width: 34,
        height: 34
    }
})
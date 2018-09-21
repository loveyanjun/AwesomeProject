import React from 'react'
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet
} from 'react-native'

export default class Home extends React.PureComponent {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor}) => (
            <Image style={[styles.drawerIcon, { tintColor: tintColor }]} source={require('../images/monkey.jpg')}/>
        )
    }
    render () {
        return (
            <View style={styles.home}>
                <Text>Home</Text>
                <Button title="Go to Life" onPress={()=>this.props.navigation.navigate('Life')}/>
                <Text>有一行文字</Text>
                <Button title="Go to Work" onPress={()=>this.props.navigation.navigate('Work')} />
                <Text>----------分割线----------</Text>
                <Button title="Go to direction" color='#a0f' onPress={()=>this.props.navigation.navigate('Direction')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    home: {
        paddingTop: 100,
        backgroundColor: '#fff'
    },
    drawerIcon: {
        width: 34,
        height: 34
    }
})
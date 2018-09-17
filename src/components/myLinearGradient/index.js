import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default class MyLinearGradient extends React.PureComponent {
    render () {
        return (
            <View style={styles.spotWrap}>
                <Text>两色渐变</Text>
                <LinearGradient
                    style={styles.spot}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={['red', 'yellow', 'blue']} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    spotWrap: {
        width: 200,
        height: 200,
        backgroundColor: '#eee'
        // borderWidth: 1,
        // borderStyle: 'solid',
        // borderColor: '#eee'
    },
    spot: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#f6c475'
    }
})
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
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={['red', 'green']} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    spotWrap: {
        // width: 300,
        // height: 300,
        // backgroundColor: '#eee'
        // borderWidth: 1,
        // borderStyle: 'solid',
        // borderColor: '#eee'
    },
    spot: {
        width: 700,
        height: 200,
        // borderRadius: 100,
        backgroundColor: '#f6c475'
    }
})
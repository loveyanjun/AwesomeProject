import React from 'react'
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native'
import Ionicons from 'react-native-vector-icons'

export default class List extends React.PureComponent {
    static navigationOptions = {
        title: '我的'
    }

    render () {
        return (
            <TouchableHighlight style={styles.myselfQrcode} onPress={() => this.props.navigation.navigate('Qrcode')}>
                <View>
                    <Text style={styles.qrcodeTxt}>扫一扫</Text> 
                    {/* <View>
                        <Ionicons name="ios-qr-scanner" size={25} />                
                    </View> */}
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    myselfQrcode: {
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        marginTop: 10,
        flexDirection: 'row'
    },
    qrcodeTxt: {
        marginTop: 5,
        marginLeft: 20
    }
})
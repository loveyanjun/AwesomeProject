import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'

export default class Qrcode extends React.PureComponent {
    constructor (props) {
        super(props)
        this.state = {
            url: 'xxx',
            success: false
        }
    }

    // static navigationOptions = {
    //     title: '返回'
    // }

    handleQrcode = (e) => {
        const { data: url } = e
        console.log(url)
        this.setState({
            url,
            success: true
        })
    }

    componentDidMount () {
        console.log('扫一扫')
    }
    
    render () {
        const { success } = this.state
        return (
            <View style={styles.qrcode}>
                {success ? (
                    <TouchableOpacity>
                        <Text>{this.state.url}</Text>
                    </TouchableOpacity>
                ) : (<QRCodeScanner
                    onRead={this.handleQrcode}
                    containerStyle={styles.containerStyle}
                    />)}
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    qrcode: {
        width: '100%',
        height: '100%',
    },
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
      },
      textBold: {
        fontWeight: '500',
        color: '#000',
      },
      buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
      },
      buttonTouchable: {
        padding: 16,
      },
      containerStyle: {
          backgroundColor: '#000'
      }
})
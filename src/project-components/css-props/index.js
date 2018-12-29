import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'

export default class CssProps extends React.PureComponent {
    render () {
        return (
            <View style={styles.view}>
                <Text style={styles.text}>很长很长的一段话，很长很长的一段话很长很长的一段话很长很长的一段话很长很长的一段话很长很长的一段话很长很长的一段话很长很长的一段话很长很长的一段话</Text>
                <Image style={styles.image} source={require('./images/timg.jpg')} />
                <View style={styles.test}>
                    <Text>这是个图片</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        direction: 'rtl' // 对子元素起作用，并且子元素必须设置宽度，比如：子元素有Image,设置了宽高，就会从右到左显示；
    },
    text: {
        direction: 'rtl'
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    test: {
        width: 150,
        height: 50,
        backgroundColor: '#0f0',
        direction: 'rtl'
    }
})
import React from 'react'
import {
    View,
    Image,
    StyleSheet
} from 'react-native'

export default class ImageTest extends React.PureComponent {
    render () {
        return (
            <View style={styles.imageWrap}>
            <Image
                style={styles.image}
                blurRadius={5} // 给图片设置模糊度
                source={require('./images/timg.jpg')}
                onLayout={this.handleLayout}
                onLoad={this.handleLoad}
                onLoadStart={this.handleLoadStart}
                onLoadEnd={this.handleLoadEnd}
                resizeMode='stretch'
                />
            </View>
        )
    }

    handleLayout = () => {
        console.log('元素加载或布局改变')
    }

    handleLoad = (e) => {
        console.log(e)
        console.log('图片加载成功')
    }

    handleLoadStart = (e) => {
        console.log(e)
        console.log('图片开始加载')
    }

    handleLoadEnd = (e) => {
        console.log(e)
        console.log('图片加载结束')
    }
}

const styles = StyleSheet.create({
    imageWrap: {
        width: 300,
        height: 300,
        backgroundColor: '#f0f'
    },
    image: {
        width: 240,
        height: 240,
        borderRadius: 120
    }
})
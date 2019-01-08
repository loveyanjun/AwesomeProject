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
                resizeMode='contain'
                // loadingIndicatorSource={require('./images/indicator.jpg')}
                resizeMethod='scale'
                accessibilityLabel='图片的属性'
                accessible
                defaultSource={require('./images/indicator.jpg')}
                onPartialLoad={this.handlePartical}  // TODO: 未调用
                onProgress={this.handleProgress} // TODO: 未调用
                // fadeDuration={1000}
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

    handlePartical = () => {
        console.log('逐步加载。。。。')
    }

    handleProgress = (event) => {
        console.log('加载过程中不断调用')
        console.log(event)
    }
}

const styles = StyleSheet.create({
    imageWrap: {
        // width: 300,
        // height: 300,
        backgroundColor: '#f0f'
    },
    image: {
        // width: 240,
        // height: 240,
        // borderRadius: 120
    }
})
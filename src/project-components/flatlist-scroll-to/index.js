import React from 'react'
import {
    View,
    Text,
    FlatList,
    Dimensions,
    StyleSheet
} from 'react-native'
import { data } from './constants'
import Button from '../../components/button/index'

/*
通过使用:
ref
scrollToOffset
实现滚动到指定的位置，，
但是getItemLayout好像并没有起作用
*/

// TODO:
/*
1、实现fixed定位
2、如何得到元素有哪些属性？
*/

const { width: windowWidth } = Dimensions.get('window')

export default class FlatListScrollTo extends React.PureComponent {
    render () {
        return (
            <View style={styles.wrapper}>
                <Button style={styles.button} onPress={this.handleScroll}>滚动到指定位置</Button>
                <Button style={styles.topButton} onPress={this.handleToTop}>置顶</Button>
                <FlatList
                    ref={this.handleFlatlist}
                    keyExtractor={({id}) => id}
                    renderItem={this.renderItem}
                    data={data}
                    ListEmptyComponent={this.emptyComponent}
                    ListHeaderComponent={this.headerComponent}
                    ListFooterComponent={this.footerComponent}
                    ItemSeparatorComponent={this.separatorComponent}
                    // numColumns={3}
                    // columnWrapperStyle={styles.columWrapper}
                    // getItemLayout={this.getItemLayout}
                    // initialNumToRender={2} // 不管是numColumns是否大于1，该渲染方式是以视觉上的两行来进行渲染的
                    // initialScrollIndex={1} // 先渲染这个，忽略initialNumToRender，，必须指定getItemLayout,该属性应该是按照getItemLayout所定义的来计算
                    // inverted={true} // 将列表反过来显示，也就是列表从最后一个开始显示
                    onEndReachedThreshold={0}
                    onEndReached={this.handleEndReached}
                />
            </View>
        )
    }

    renderItem = ({item, index}) => {
        const { id, title, supplier, amount, remain } = item
        const colorIndex = index % 2 === 1 ? '#f9a' : '#afe'
        return (
            <View style={[styles.item, colorIndex && {backgroundColor: colorIndex}]}>
                <Text>{`第${id}个元素`}</Text>
                <View style={styles.itemNames}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.supplier}>{supplier}</Text>
                </View>
                <View>
                    <Text style={styles.amount}>{`每箱${amount}瓶`}</Text>
                    <Text style={styles.amount}>{`库存：${remain}`}</Text>
                </View>
            </View>
        )
    }

    emptyComponent = () => {
        return (
            <View>
                <Text>空空如也~</Text>
            </View>
        )
    }

    headerComponent = () => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>产品信息表</Text>
            </View>
        )
    }

    footerComponent = () => {
        return (
            <View style={styles.footer}>
                <Text>月度报表</Text>
            </View>
        )
    }

    separatorComponent = () => {
        return (
            <View style={styles.separatar}/>
        )
    }

    getItemLayout = (data, index) => ({
        length: 100,
        offset: (100 + 2) * index,
        index
    })


    handleFlatlist = flatlist => {
        console.log(flatlist)
        this.flatlist = flatlist
    }

    handleScroll = () => {
        this.flatlist.scrollToOffset({
            animated: true,
            offset: 400
        })
    }

    handleToTop = () => {
        this.flatlist.scrollToOffset({
            animated: true,
            offset: 0
        })
    }

    handleEndReached = () => {
        console.log('handleEndReached')
    }
}

const styles = StyleSheet.create({
    wrapper: {
      position: 'relative'  
    },
    button: {
        width: 120,
        borderRadius: 10
    },
    topButton: {
        position: 'relative',
        // left: 10,
        // right: 10,
        bottom: 0,
        width: 120,
        borderRadius: 10,
        backgroundColor: '#7a3'
    },
    header: {
        alignItems: 'center',
        marginBottom: 10
    },
    headerText: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold'
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    separatar: {
        height: 1,
        backgroundColor: 'red'
    },
    columWrapper: { //用来设置分为3行时的样式，相当于改属性已经默认设置flexDirection: row
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingVertical: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'yellow'
    },
    item: {
        flex: 1,
        paddingHorizontal: 10,
        height: 100,
        // maxWidth: windowWidth / 2   // 当一行只有一个单元的时候，需要指定最大宽度,不然一个单元就会布满整行；；；只有设置numColumns的时候，才需要设置最大宽度
    },
    itemNames: {
        flexDirection: 'row',
        justifyContent: 'space-between', // 设置该属性没有效果的时候，考虑父级元素设置：flex:1
        marginBottom: 10
    },
    title: {
        color: '#333',
        fontSize: 15,
        fontWeight: 'bold'
    },
    supplier: {
        color: '#9a2'
    },
    amount: {
        fontSize: 13,
        color: '#999'
    }
})
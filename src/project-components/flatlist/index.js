import React from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Platform
} from 'react-native'
import { flatlist } from './constants'
// import NoData from '../../components/no-data/index'

/*
练习flatlist的以下属性:
keyExtractor
renderItem
data
ListEmptyComponent
ListHeaderComponent
ListFooterComponent
ItemSeparatorComponent
numColums
ColumnWrapperStyle
*/

export default class FlatListTest extends React.PureComponent {
    renderItem = ({item}) => {
        const { id, name, des } = item
        return (
            <View style={styles.item}>
                <Text>{id}</Text>
                <Text style={styles.itemName}>{name}</Text>
                <Text numberOfLines={1}>{des}</Text>
            </View>
        )
    }

    // separatorComponent = (item) => {
    //     console.log(item)
    //     return (
    //         <View>
    //             <Text>--------------</Text>
    //         </View>
    //     )
    // }

    emptyComponent = () => {
        return (
            <View style={styles.empty}>
                暂无内容
            </View>
        )
    }

    headerComponent = () => {
        return (
            <View style={styles.item}>
                <Text>id</Text>
                <Text>名称</Text>
                <Text>描述</Text>
            </View>
        )
    }

    footComponent = () => {
        return (
            <View style={styles.footer}>
                <Text>页脚部分</Text>
            </View>
        )
    }

    render () {
        return (
            <FlatList
                keyExtractor={(item) => item.id}
                renderItem={this.renderItem}
                data={flatlist}
                // ItemSeparatorComponent={this.separatorComponent}
                ListEmptyComponent={this.emptyComponent}
                ListHeaderComponent={this.headerComponent}
                ListFooterComponent={this.footComponent}
                // horizontal={true}
                numColumns={2}
                columnWrapperStyle={{backgroundColor: '#0fa'}}
                />
        )
    }
}

const styles = StyleSheet.create({
    flatlist: {
        flex: 1
    },
    item: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: StyleSheet.hairlineWidth,
        // borderStyle: 'dotted',
        // borderBottomStyle: 'dashed',
        borderBottomColor: '#ddd' 
    },
    itemName: {
        color: '#333'
    },
    line: {
        width: '100%'
    },
    empty: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})
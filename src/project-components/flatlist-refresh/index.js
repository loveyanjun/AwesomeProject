import React from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native'
import { flatlistData } from './constants'

/*

*/

export default class FlatListRefresh extends React.PureComponent {
    render () {
        return (
            <View>
                <FlatList
                keyExtractor={(item, index) => item.id}
                renderItem={this.renderItem}
                data={flatlistData}
                onEndReachedThreshold={0} // 默认值为2
                onEndReached={this.handleEndReched}
                // 最好设置onEndReachedThreshold，并且设置为比较小的数值；
                // 如果不设置onEndReachedThreshold，onEndReachedThreshold的默认值为2，所以，页面初始化的时候，onEndReached方法会被执行两次
                 />
            </View>
        )
    }

    renderItem = ({item, index}) => {
        const { id, name, des, percent, money, quarter } = item
        const colorItem = index % 2 === 1 ? '#eaf' : '#0af'
        return (
            <View style={[styles.item, colorItem && { backgroundColor: colorItem }]}>
                <Text style={styles.itemId}>{`第${id}个`}</Text>
                <Text style={styles.itemName}>{name}</Text>
                <Text style={styles.itemDes}>{des}</Text>
                <View style={styles.itemPercentMoney}>
                    <Text>{`费率 ${percent}`}</Text>
                    <Text>{`合计${money}（元）`}</Text>
                </View>
                <Text>{quarter}</Text>
            </View>
        )
    }

    handleEndReched = () => {
        console.log('实现分页')
        for (let i = 1; i < 5; i++) {
            flatlistData.push({
                id: 10 + i,
                name: `名称${i}`,
                des: '描述内容',
                quarter: '第一季度',
                percent: '0.1',
                money: 9109.99
            })
        }
        // 正常的分页情况：
        // this.fetData({
        //     pageNo: this.pageNo++,
        //     pageSize: 10,
        //     offset: 10 * this.pageNo
        // })
    }
}

const styles = StyleSheet.create({
    item: {
        paddingHorizontal: 13,
        paddingVertical: 10
    },
    itemId: {
        color: 'red',
        fontSize: 18,
        marginBottom: 10
    },
    itemName: {
        color: '#333',
        fontSize: 18,
        marginBottom: 10
    },
    itemDes: {
        color: '#fff',
        marginBottom: 10
    },
    itemPercentMoney: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
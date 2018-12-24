import React from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native'
import { flatlist } from '../../utils/constants'

export default class FlatListTest extends React.PureComponent {
    _renderItem = ({item}) => {
        const { name, des } = item
        return (
            <View style={styles.item}>
                <Text style={styles.itemName}>{name}</Text>
                <Text>{des}</Text>
            </View>
        )
    }

    render () {
        return (
            <FlatList
                keyExtractor={(item, index) => item.id}
                renderItem={this._renderItem}
                data={flatlist} />
        )
    }
}

const styles = StyleSheet.create({
    flatlist: {
        flex: 1
    },
    item: {
        paddingHorizontal: 10,
       flexDirection: 'row',
       justifyContent: 'space-between' 
    },
    itemName: {
        color: '#333'
    }
})
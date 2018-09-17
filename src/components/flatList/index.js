import React from 'react'
import {
    Text,
    View,
    FlatList
} from 'react-native'
import { flatListData2 } from '../../utils/constants'

export default class RNFlatList  extends React.PureComponent {
    render () {
        return (
            <FlatList
            numColumns={2}
            data={flatListData2}
            renderItem={({item, index}) => <Text key={item.id} style={{marginRight: 10}}>{item.name}</Text>} /> 
        )
    }
}
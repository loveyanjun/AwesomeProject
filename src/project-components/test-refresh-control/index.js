import React from 'react'
import {
    View,
    Text,
    ScrollView,
    RefreshControl,
    StyleSheet
} from 'react-native'

export default class TestRefreshControl extends React.PureComponent {
    constructor (props) {
        super(props)
        this.state = {
            refreshing: false
        }
    }

    render () {
        const { refreshing } = this.state
        return (
            <ScrollView
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={this.handleRefresh}/>
            }>
            <View style={styles.refreshView}>
                <Text>refreshControl</Text>
            </View>
            </ScrollView>
        )
    }

    handleRefresh = () => {
        console.log('handleRefresh')
    }
}

const styles = StyleSheet.create({
    refreshView: {
        height: 700,
        backgroundColor: '#0af'
    }
})
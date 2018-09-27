import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import JobList from './list'
import Detail from './detail'

const JobsStack = createStackNavigator({
    JobList: {
        screen: JobList
    },
    Detail: {
        screen: Detail
    }
})

export default class Home extends React.PureComponent {
    render () {
        return (
            <JobsStack />
        )
    }
}
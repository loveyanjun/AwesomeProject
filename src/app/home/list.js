import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Job from './job'
import { jobs } from '../../utils/app/constants'

export default class List extends React.PureComponent {
    static navigationOptions = {
        title: 'web前端'
    }

    render () {
        return (
            <View style={styles.jobsContainer}>
                {jobs.map((item) => {
                    return (
                        <Job
                        key={item.id}
                        item={item}
                        navigation={this.props.navigation} /> 
                    )
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    jobsContainer: {
    }
})
import React from 'react'
import {
    ActivityIndicator
} from 'react-native'

export default class Loading extends React.PureComponent {
    static propTypes = {
        ...ActivityIndicator.props
    }
    render () {
        const { size, color } = this.props
        return (
            <ActivityIndicator size={size} color={color} />
        )
    }
}
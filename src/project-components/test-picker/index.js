import React from 'react'
import {
    View,
    Text,
    Picker,
    StyleSheet
} from 'react-native'

export default class TestPicker extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            language: 'java'
        }
    }
    render () {
        const { language } = this.state
        return (
            <Picker
            selectedValue={language}
            // style={{height: 50, width: 100}}
            itemStyle={styles.pickerStyle}
            // enabled={false} // TODO: 不明白是什么意思
            onValueChange={this.handleValueChange}>
            <Picker.Item label='Java' value='java' />
            <Picker.Item label='Javascript' value='javascript' />
            <Picker.Item label='C++' value='c++' />
            <Picker.Item label='C语言' value='C语言' />
            </Picker>
        )
    }

    handleValueChange = (item, index) => {
        this.setState({
            language: item
        })
    }
}

const styles = StyleSheet.create({
    pickerStyle: {
        height: 240,
        backgroundColor: 'blue',
        color: '#fff'
    }
})
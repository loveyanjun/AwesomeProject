import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import Pop from '../components/pop/index'

export default class TestComponent extends React.PureComponent {
  state = {
    modalVisible: false,
    inputValue: 'sss'
  }

  handleTouch = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }

  handleShowModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }

  handleConfirm = () => {
      this.setState({
          modalVisible: false
      })
  }

  render() {
    const { modalVisible, inputValue } = this.state
    
    return (
      <View style={styles.test}>
        <Text>modal组件测试</Text>

        <Pop visible={modalVisible}>
            <View style={styles.content}>
                <Text>标题</Text>
                <View>
                    <Text>modal内容</Text>
                    <TextInput value={inputValue}/>
                </View>
                <View>
                    <Text>尾部</Text>
                    <TouchableOpacity style={styles.btnConfirm} onPress={this.handleConfirm}>
                        <Text style={styles.confirm}>确定</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Pop>

        <TouchableOpacity style={styles.showTouch} onPress={this.handleTouch}>
          <Text>显示modal</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    test: {
        marginTop: 100
    },
    btnConfirm: {
        width: 100,
        height: 40,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    confirm: {
        color: '#fff'
    },
    content: {
        marginBottom: 100
    },
    showTouch: {
        width: 100,
        height: 40,
        backgroundColor: '#999',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

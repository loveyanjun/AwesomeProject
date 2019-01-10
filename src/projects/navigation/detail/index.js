import React from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'

export default class Detail extends React.PureComponent {
    // static navigationOptions = {
    //     title: '详情页'
    // }

    static navigationOptions = ({navigation}) => {
        return {
            // title: navigation.state.params.title
            title: navigation.getParam('title', '默认详情标题。。。。'),
            // headerTitle: <LogoTitle />,
            headerRight: (
                <Button title='充值去' color='#f0f' onPress={()=> alert('hello')} />
            ),
            headerStyle: {
                backgroundColor: '#0f0'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
            
        }
    }

    render () {
        console.log('detail...')
        console.log(this.props)
        console.log('get params:')
        console.log(this.props.navigation.getParam('itemId'))
        console.log(this.props.navigation.getParam('type', 'mmmm')) // getParam第二个参数表示设置默认值，不存在时将使用默认值
        return (
            <View>
                <Text>详情页面</Text>
                <Button title='Go back' color='#000' onPress={()=> this.props.navigation.navigate('Home')}/>
                <Button title='Go back' color='#0f0' onPress={()=> this.props.navigation.goBack()}/>
                <Button title='Go back Home' color='#0a0' onPress={()=>this.props.navigation.push('Details', {
                    itemId: Math.floor(Math.random() * 100)
                })}/>
                <Button title='set Params' color='#29a' onPress={()=> this.props.navigation.setParams({
                    title: '更新标题'
                })} />
            </View>
        )
    }
}

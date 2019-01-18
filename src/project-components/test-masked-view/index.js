import React from 'react'
import {
    View,
    Text,
    MaskedViewIOS,
    StyleSheet
} from 'react-native'

export default class TestMaskViewIos extends React.PureComponent {
    render () {
        return (
            <View>
                <Text>蒙版视图</Text>
            <MaskedViewIOS
              style={{ flex: 1, flexDirection: 'row', height: '100%' }}
              maskElement={
                <View style={{
                  backgroundColor: 'transparent',
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Text style={{
                    fontSize: 60,
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                    Basic Mask
                  </Text>
                </View>
              }
            >
              {/* <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
              <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} /> */}
              <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
            </MaskedViewIOS>
            </View>
          )
    }
}
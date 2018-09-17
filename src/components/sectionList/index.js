import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SectionList
} from 'react-native'
import {
    // sectionListData1,
    sectionListData2,
    flatListData,
    flatListData2
} from '../../utils/constants'
import TaskItem from '../../project-components/task-item'

export default class RnSectionList extends React.PureComponent {
    getRenderItem = (data) => {
        
        const { item, index, section, separators } = data
        console.log(separators)
        return (
            <TaskItem key={item.taskId} item={item} data={section.data}/>
        )
    }

    getHeader = (data) => {
        const { title } = data.section
        return (
            <View style={styles.taskName}>
              <Text style={styles.name}>{title}</Text>
            </View>
        )
    }

    render () {
        return (
            <View>
                <SectionList
                style={styles.taskList}
                // initialNumToRender={2}
                // inverted
                renderSectionHeader={data => this.getHeader(data)}
                renderItem={(data) => this.getRenderItem(data)}
                sections={sectionListData2}
                keyExtractor={(item, index) => item.taskId} />
            {/* <SectionList
            numColumns={2}
            data={flatListData2}
            renderItem={({item, index}) => <Text key={item.id} style={{marginRight: 10}}>{item.name}</Text>} /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    taskName: {
        backgroundColor: '#f0f',
        marginTop: 26,
        marginBottom: 20
      },
      name: {
        color: '#333',
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: 21
      },
      taskList: {
        marginLeft: 16,
        marginRight: 16,
        paddingTop: 21,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#111e3d',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        shadowOffset: {
          width: 0,
          height: 3
        }
      }
})
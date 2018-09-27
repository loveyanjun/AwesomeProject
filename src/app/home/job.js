import React from 'react'
import PropTypes from 'prop-types'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class Job extends React.PureComponent {
    static propTypes = {
        item: PropTypes.object
    }

    render () {
        console.log('mmmmmmmm')
        console.log(this.props.item)
        // const {
        //     name,
        //     minSalary,
        //     maxSalary,
        //     company,
        //     finance,
        //     address,
        //     experience,
        //     education,
        //     publisher } = this.props.item
        // console.log('ddd')
        // console.log(name)
        // const company = this.props.item && this.props.item.company
        const { name } = this.props.item

        return (
            <View style={styles.job}>
                <View style={styles.nameSalary}>
                    <Text style={styles.name}>金融产品经理</Text>                
                    <Text style={styles.salary}>10K-20K</Text>
                </View>
                <View style={styles.companyFinance}>
                    <Text style={styles.company}>中顺</Text>
                    <Text style={styles.finance}>不需要融资</Text>
                </View>
                <View style={styles.addRessExperienceEdu}>
                    <Text style={styles.address}>阿拉善</Text>
                    <Text style={styles.experience}>经验不限</Text>
                    <Text style={styles.education}>学历不限</Text>
                </View>
                <View style={styles.publisher}>
                    <Text>付莹莹.招聘者</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    job: {
        marginBottom: 10,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff'
    },
    nameSalary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    name: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold'
    },
    salary: {
        color: '#52cbc5',
        fontSize: 16,
        fontWeight: 'bold'
    },
    companyFinance: {
        flexDirection: 'row',
        marginBottom: 10
    },
    company: {
        marginRight: 10,
        fontSize: 16,
        color: '#333',
    },
    finance: {
        fontSize: 16,
        color: '#333',
    },
    addRessExperienceEdu: {
        flexDirection: 'row',
        marginBottom: 10
    },
    address: {
        color: '#555',
        marginRight: 10
    },
    experience: {
        color: '#555',
        marginRight: 10
    },
    education: {
        color: '#555',
        marginRight: 10
    }
})
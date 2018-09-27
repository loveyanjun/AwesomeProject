import React from 'react'
import PropTypes from 'prop-types'
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native'

export default class Job extends React.PureComponent {
    static propTypes = {
        // navigation: PropTypes.
        item: PropTypes.object,
        navigation: PropTypes.object
    }

    goToDetail = () => {
        console.log('去详情页面')
        console.log(this.props.navigation)
        // this.props.navigation.navigate('Detail')
    }

    render () {
        const {
            name,
            minSalary,
            maxSalary,
            company,
            finance,
            address,
            experience,
            education,
            publisher } = this.props.item || {}

        return (
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={styles.job}>
                <View style={styles.nameSalary}>
                    <Text style={styles.name}>{name}</Text>                
                    <Text style={styles.salary}>{minSalary}-{maxSalary}</Text>
                </View>
                <View style={styles.companyFinance}>
                    <Text style={styles.company}>{company}</Text>
                    <Text style={styles.finance}>{finance}</Text>
                </View>
                <View style={styles.addRessExperienceEdu}>
                    <Text style={styles.address}>{address}</Text>
                    <Text style={styles.experience}>{experience}</Text>
                    <Text style={styles.education}>{education}</Text>
                </View>
                <View style={styles.publisher}>
                    <Text>{publisher}</Text>
                </View>
            </View>
            </TouchableHighlight>
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
import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

import Logo from './Logo'

const ListItem = props => {
    console.log('Working')
    return (
        <View style={styles.container}>
            <View style={styles.cartInfo}>
                <Text style={styles.title}>Dinner Cart</Text>
                <Text style={styles.extraInfo}>{props.extraInfo}</Text>
            </View>
            <TouchableOpacity onPress={props.action}>
                <View style={{...styles.icon, ...props.listIconStyles}}>
                        <Icon 
                            name={props.icon} size={props.size} color={props.color}
                        />
                </View>
            </TouchableOpacity>
        </View> 
    )
}

let styles = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 3,
        padding: 0,
        backgroundColor: '#f7f5f3',
        borderRadius: 23,
        marginVertical: 8
    },
    cartInfo: {
        paddingLeft: 30,
        paddingVertical: 10,
        // backgroundColor: 'red',
        flex: 1
    },
    title: {
        fontSize: 22,
        fontWeight: '400',
    },
    extraInfo: {
        // fontWeight: '700',
        fontSize: 13,
        marginTop: 4,
    },
    icon: {
        backgroundColor: '#ff5c37',
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginRight: 20
    }
})

export default ListItem
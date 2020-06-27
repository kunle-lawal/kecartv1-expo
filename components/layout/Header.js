import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Logo from './Logo'

const Header = props => {
    return (
        <View style={styles.container}>
            <Logo/>
            <View style={styles.icon}>
                <TouchableOpacity>
                    <Icon 
                        name="user" size={18} color="#fff"
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

let styles = StyleSheet.create({
    container: {
        height: 100,
        padding: 15,
        paddingTop: 50,
        backgroundColor: '#ffdb37',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        // padding: 10,
        // paddingLeft:20,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        width: 40,
        borderRadius: 100,
        borderWidth: 2,
        justifyContent: 'center',
        backgroundColor: '#222'
    }
})

export default Header
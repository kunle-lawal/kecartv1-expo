import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>KE</Text>
            <Icon 
                style={styles.icon}
                name="shopping-cart" size={20} color="black"
            />
        </View>
    )
}

let styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingLeft:20,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'red',
        height: 100
    },
    text: {
        fontSize: 40,
    },
    icon: {
        transform: [
            {rotateZ: '-10deg'}
        ]
    }
})

export default Header
import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

import ListItem from '../layout/ListItem'

export default ShoppingListScreen = props => {
    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            <View style={styles.container}>
                {/* <View style={styles.cartInfo}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 2
                    }}>
                        <Icon 
                            // onPress={props.}
                            name={'arrow-left'} size={25} color={'black'}
                        />
                        <Text style={styles.title}>Dinner</Text>
                    </View>
                    <Text style={{
                        fontSize: 20,
                        marginRight: 10
                    }}>0/3</Text>
                </View> */}
                <View style={styles.textInputContainer}>
                    <TextInput 
                        style={styles.textInput}
                        placeholder="Cart name..."
                    />
                    <View style={styles.icon}>
                        <Icon 
                            name="plus" size={20} color="black"
                        />
                    </View>
                </View>
                <View style={styles.listItems}>
                    <ListItem 
                        style={styles.listItem}
                        listIconStyles={styles.listIconStyles}
                        extraInfo={'6 Total'} icon={'circle'}
                        size={10} color={'white'}
                    />
                    <ListItem 
                        style={styles.listItem}
                        listIconStyles={styles.listIconStyles}
                        extraInfo={'6 Total'} icon={'circle'}
                        size={10} color={'white'}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

let styles = StyleSheet.create({
    container: {
        backgroundColor: '#fffefa',
        flex: 1,
        alignItems: 'center',
        // borderTopRightRadius: 35,
        // borderTopLeftRadius: 35,
    },
    cartInfo: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        height: 50,
        width: '90%',
        marginVertical: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 34,
        fontWeight: '500',
        marginHorizontal: 10
    },
    textInputContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '90%',
        borderColor: '#efefef',
        // backgroundColor: 'red',
        borderWidth: 1,
        borderRadius: 50,
        paddingLeft: 5,
        marginTop: 30,
    },
    textInput: {
        padding: 20,
        width: '80%',
    },
    icon: {
        backgroundColor: '#ffdb37',
        width: 33,
        height: 33,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    listIconStyles: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#ff5c37',
        width: 25,
        height: 25
    },
    listItems: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
});
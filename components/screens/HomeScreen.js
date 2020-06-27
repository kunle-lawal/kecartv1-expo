import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, Button} from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

import ListItem from '../layout/ListItem';
import Header from '../layout/Header'

export default HomeScreen = ({navigation}) => {
    let [addingCart, setAddingCart] = useState(false);

    let goToThis = () => {
        navigation.navigate("ShoppingCart")
    }

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            <View style={{flex: 1}}>
                <Header />
                <View style={styles.container}>
                    {/* <Text style={styles.title}>My Carts</Text> */}
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
                            extraInfo={'17/04/2020'} icon={'arrow-right'}
                            size={16} color={'white'}
                            action={() => navigation.push("ShoppingCart")}
                        />
                        <ListItem 
                            extraInfo={'17/04/2020'} icon={'arrow-right'}
                            size={16} color={'white'}
                            action={() => navigation.push("ShoppingCart")}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

let styles = StyleSheet.create({
    container: {
        backgroundColor: '#fffefa',
        flex: 1,
    },
    title: {
        fontSize: 34,
        padding: 30,
        paddingLeft: 35,
        paddingTop: 35,
        fontWeight: '500'
    },
    textInputContainer: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        marginTop: 30
        // backgroundColor: 'red',
    },
    textInput: {
        width: '75%',
        borderColor: '#efefef',
        borderWidth: 1,
        padding: 20,
        paddingVertical:18,
        borderRadius: 50,
    },
    icon: {
        backgroundColor: '#ffdb37',
        width: 43,
        height: 43,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listItems: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
})

HomeScreen.navigationOptions = screenProps => ({
    title: "Home"
});
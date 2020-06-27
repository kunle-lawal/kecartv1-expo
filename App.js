import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './components/screens/HomeScreen'
import ShoppingList from './components/screens/ShoppingListScreen'
import { enableScreens } from 'react-native-screens';
enableScreens();
import Navigator from "./components/navigation/StackNavigator"

// firestore()
//   .collection('carts')
//   .doc('ttDGzg0I3RFEpOzvcjqq')
//   .collection('cartItems')
//   .onSnapshot(onResult, onError);

// const users = firestore()
//   .collection('carts')
  // .doc('ttDGzg0I3RFEpOzvcjqq')
  // .collection('cartItems')
//   .get();

// console.log(users);

export default function App() {

  let view = (
    <HomeScreen/>
  )

  return (
    <View style={styles.container}>
      <Navigator 
        style={{backgroundColor: 'blue'}}
      />
      {/* {view} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#ffdb37',
  },
});

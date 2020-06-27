import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from 'react-navigation';

import ShoppingListScreen from '../screens/ShoppingListScreen';
import HomeScreen from '../screens/HomeScreen';

const screens = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'back',
      headerStyle: {
        backgroundColor: '#ffdb37',
      },
      header: null,
      headerTitleStyle: {
        fontSize: 20
      }
    },
  },
  ShoppingCart: {
    screen: ShoppingListScreen,
    navigationOptions: {
      // header: null,
      headerStyle: {
        backgroundColor: '#ffdb37',
      },
      headerTitleStyle: {
        fontSize: 20,
      },
    }
  }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import HomeScreen from "../screens/HomeScreen";
import ShoppingListScreen from '../screens/ShoppingListScreen';

const TabNavigator = createBottomTabNavigator({
	Home: HomeScreen,
});

export default createAppContainer(TabNavigator);
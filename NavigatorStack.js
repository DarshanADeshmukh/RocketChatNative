import React from "react";
import { View, Text ,Button, StackActions} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './Components/Home';
import RocketChat from './Components/RocketChat';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  RocketChat: {
    screen: RocketChat,
  },
}, {
    initialRouteName: 'Home',
});

const App = createAppContainer(AppNavigator);
export default App;

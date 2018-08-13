import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput, 
  TouchableHighlight, 
  ScrollView 
} from 'react-native';

import { createBottomTabNavigator,createTabNavigator, createSwitchNavigator,createStackNavigator } from "react-navigation";
//import views 
import Login from './client/component/Login';
import Details from './client/component/Details';
import Favorites from './client/component/Favorites';
import Itinerary from "./client/component/Itinerary";
import Ionicons from "react-native-vector-icons/Ionicons";
import Profil from "./client/component/Profil";
import CreateItinerary from "./client/component/CreateItinerary";
import CreateStop from './client/component/CreateStop';
import Stops from "./client/component/Stops";
import CommentStop from "./client/component/CommentStop";

// can't swipe createBottomTabNavigator 
// createTabNavigator depreciate but can swip :)
const Tabs = createBottomTabNavigator(
  {
    Itinerary: Itinerary,
    Favorites: Favorites,
    CreateItinerary: CreateItinerary,
    Profil: Profil,
    CreateStop: CreateStop
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Profil") {
          iconName = `ios-contact${focused ? "" : "-outline"}`;
        } else if (routeName === "Favorites") {
          iconName = `ios-folder${focused ? "" : "-outline"}`;
        } else if (routeName === "CreateItinerary") {
          iconName = `ios-add-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "Itinerary") {
          iconName = `ios-menu${focused ? "" : "-outline"}`;
        } else if (routeName === "CreateStop") {
          iconName = `ios-add-circle${focused ? "" : "-outline"}`;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={20} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    },
    swipeEnabled: true,
  }
);
// Define navigator
const AppStack = createStackNavigator({ 
  Home: Tabs, // Home 's a key not a component 
  Details: Details,
  Favorites:Favorites,
  Itinerary:Itinerary,
  Stops:Stops,
  Profil:Profil,
  CommentStop:CommentStop
});
// Auth navigator
const AuthStack = createStackNavigator({ Login: Login });

// use switch navigator to fixe the back button in the login
const RootStack = createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth'
  }
);

class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

export default App


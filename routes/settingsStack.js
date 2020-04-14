import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import Header from "../components/Header.js";

import SettingsScreen from "../screens/SettingsScreen.js";
import MainScreen from "../screens/MainScreen.js";
import ForumHomeScreen from "../screens/ForumHomeScreen.js";
import ForumScreen from "../screens/ForumScreen.js";
import InboxScreen from "../screens/InboxScreen.js";
import MessageScreen from "../screens/MessageScreen.js";

// Skapar screens med olika namn som representerar de 'screens' som finns i applikationen.
// Skärmarna får sedan 'navigation' medskickat för att kunna navigera mellan skärmarna.
// En viss titel skickas också med som går att återspegla i headern på varja sida i applikationen.
const screens = {
  SettingsScreen: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Settings" />
      }
    }
  },
  MainScreen: {
    screen: MainScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Home" />
      }
    }
  },
  ForumHomeScreen: {
    screen: ForumHomeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Forum Home" />
      }
    }
  },
  ForumScreen: {
    screen: ForumScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Forum" />
      }
    }
  },
  MessageScreen: {
    screen: MessageScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="PersonName" />
      }
    }
  },
  InboxScreen: {
    screen: InboxScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Inbox" />
      }
    }
  }
};

// Skapar en StackNavigator med metoden createStackNavigator. Denna används för att navigera på ett annat vis än med en DrawerNavigator.
const SettingsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#184A73",
      shadowColor: "transparent",
      height: 60,
    },
  },
});

export default SettingsStack;

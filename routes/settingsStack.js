import { createStackNavigator } from 'react-navigation-stack';
import SettingsScreen from '../screens/SettingsScreen.js';
import MainScreen from '../screens/MainScreen.js';
import Header from '../components/Header.js';
import React from 'react';

// Skapar screens med olika namn som representerar de 'screens' som finns i applikationen. 
// Skärmarna får sedan 'navigation' medskickat för att kunna navigera mellan skärmarna.
// En viss titel skickas också med som går att återspegla i headern på varja sida i applikationen.
const screens = {
    SettingsScreen: {
        screen: SettingsScreen,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Settings' />,
            }
        }
    },
    MainScreen: {
        screen: MainScreen,
        navigationOptions: ({navigation}) =>{
            return {
                headerTitle: 'Home'
            }
        }
    }
}

// Skapar en StackNavigator med metoden createStackNavigator. Denna används för att navigera på ett annat vis än med en DrawerNavigator.
const SettingsStack = createStackNavigator(screens, {

    defaultNavigationOptions: {

        headerStyle: {
            backgroundColor: '#184A73',
            shadowColor: 'transparent',
            height: 60
        },
    }
});

export default SettingsStack; 
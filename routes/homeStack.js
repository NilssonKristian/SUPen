import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen.js';
import LoginHeader from '../components/LoginHeader.js';
import React from 'react';

// Skapar screens med olika namn som representerar de 'screens' som finns i applikationen. 
// Skärmarna får sedan 'navigation' medskickat för att kunna navigera mellan skärmarna.
// En viss titel skickas också med som går att återspegla i headern på varja sida i applikationen.
const screens = {
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <LoginHeader navigation={navigation} title='App-X' />,
            }
        }
    },
}
// Skapar en StackNavigator med metoden createStackNavigator. Denna används för att navigera på ett annat vis än med en DrawerNavigator.
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#184A73',
            shadowColor: 'transparent',
            height: 60
        },
    }
});

export default HomeStack;
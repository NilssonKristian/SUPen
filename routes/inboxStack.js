import { createStackNavigator } from 'react-navigation-stack';
import InboxScreen from '../screens/InboxScreen.js';
import Header from '../components/Header.js';
import React from 'react';

// Skapar screens med olika namn som representerar de 'screens' som finns i applikationen. 
// Skärmarna får sedan 'navigation' medskickat för att kunna navigera mellan skärmarna.
// En viss titel skickas också med som går att återspegla i headern på varja sida i applikationen.
const screens = {
    InboxScreen: {
        screen: InboxScreen,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Inbox' />,
            }
        }
    },

}

// Skapar en StackNavigator med metoden createStackNavigator. Denna används för att navigera på ett annat vis än med en DrawerNavigator.
const InboxStack = createStackNavigator(screens, {

    defaultNavigationOptions: {

        headerStyle: {
            backgroundColor: '#184A73',
            shadowColor: 'transparent',
            height: 60
        },
    }
});

export default InboxStack; 
import { createStackNavigator } from 'react-navigation-stack';
import RegisterScreen from '../screens/RegisterScreen.js';
import LoginHeader from '../components/LoginHeader.js';
import React from 'react';

// Skapar screens med olika namn som representerar de 'screens' som finns i applikationen. 
// Skärmarna får sedan 'navigation' medskickat för att kunna navigera mellan skärmarna.
// En viss titel skickas också med som går att återspegla i headern på varja sida i applikationen.
const screens = {
    RegisterScreen: {
        screen: RegisterScreen,
        navigationOptions: ({navigation}) => {
            return{
                headerTitle: () => <LoginHeader navigation={navigation} title='Registrering' />,
            }
        }
    }
}

// Skapar en StackNavigator med metoden createStackNavigator. Denna används för att navigera på ett annat vis än med en DrawerNavigator.
const RegisterStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#184A73',
            shadowColor: 'transparent',
            height: 60
        },
    }
});

export default RegisterStack;
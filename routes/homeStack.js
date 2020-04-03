import {createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen.js';
import RegisterScreen from '../screens/RegisterScreen.js';
import Header from '../components/Header.js';
import React from 'react';


const screens = {
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='App-X'/>,
            }
        }
        
    },
    RegisterScreen:{
        screen: RegisterScreen,
        navigationOptions: {
            title: 'Registrering',
        
    }

    }
}
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
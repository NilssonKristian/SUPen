import {createStackNavigator } from 'react-navigation-stack';
import SettingsScreen from '../screens/SettingsScreen.js';
import Header from '../components/Header.js';
import React from 'react';


const screens = {
    SettingsScreen:{
        screen: SettingsScreen,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Settings'/>,
            }
        }
    },
}
const SettingsStack = createStackNavigator(screens, {

    defaultNavigationOptions: {

        headerStyle: {
            backgroundColor: '#184A73', 
            shadowColor: 'transparent',
            height:60
        },
     }
 });

export default SettingsStack; 
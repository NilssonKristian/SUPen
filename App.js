import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#184A73' },
        headerTitleStyle: {
          fontSize: 35,
          color: '#76AAD2',
          shadowColor: 'black',
          shadowOffset: { width: 5, height: 0 },
          shadowOpacity: 0.8
        }
      }}>
        {/* initialParams={{ itemId: 42 }} kan användas för att sätta en initial parameter till en navigation  */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Schoolio' }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Registrering' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Inställningar' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#184A73',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80
  },
  headerText: {
    fontSize: 40,
    color: '#76AAD2',
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.8
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 200,
    width: 200,
    marginTop: 50,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.6
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginTop: 30,
    fontSize: 35,
    color: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.5
  },
  linearGradient: {
    height: '100%'
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  facebookLogInButton: {
    backgroundColor: '#3366ff',
    height: 50,
    width: 225,
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.5
  },
  ORULogInButton: {
    backgroundColor: '#203F58',
    height: 50,
    width: 225,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.5
  }
});
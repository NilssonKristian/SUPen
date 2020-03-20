import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import UniformButton from '../components/UniformButton.js';

export default function HomeScreen({ navigation }) {
  return (
    <LinearGradient style={styles.linearGradient} colors={['0E6888', '#4E83A2', '#011117']}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/Orebro_universitet_symbol.png')} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Välkommen till{"\n"}Örebro Universitets{"\n"}Studentapp</Text>
      </View>
      <View style={styles.buttonContainer}>
        <UniformButton  insertText='Logga in med facebook'/>
        <UniformButton  insertText='Logga in med oru'/>
        <UniformButton handlePress={() => {navigation.navigate('Register')}} insertText='Gå till registrering'/>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 200,
    width: 200,
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
    fontSize: 25,
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
    alignItems: 'center'
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
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {
    return (
      <View>
        <LinearGradient style={styles.linearGradient} colors={['#0E6888', '#4E83A2', '#57C9A9']}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/Orebro_universitet_symbol.png')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Välkommen till{"\n"}Örebro Universitets{"\n"}Studentapp</Text>
            
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.facebookLogInButton}>
              <Button title='Logga in med Facebook' color='white' />
            </View>
            <View style={styles.ORULogInButton}>
              <Button style={styles.button} title='Logga in med ORU-konto' color='white' />
            </View>
            <Button title='Gå till registrering' onPress={() => { navigation.navigate('Register', { itemId: 86, }); }} />
          </View>
        </LinearGradient>
      </View>
    );
  }

  const styles = StyleSheet.create({
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
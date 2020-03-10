import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function RegisterScreen({ route, navigation }) {
    const { itemId } = route.params;
    return (
        <LinearGradient style={styles.linearGradient} colors={['#0E6888', '#4E83A2', '#57C9A9']}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
  
        {/* Renderar sidan igen även om vi är på denna just nu */}
        <Button
          title="Go to Details... again"
          onPress={() =>
            navigation.push('Register', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />
        {/* Två sätt att gå tillbaka till föregående skärm antingen genom en bestämd Route eller 
        bara gå tillbaka en 'stack'. Kan även använda onPress={() => navigation.popToTop()} 
        för att gå till första sidan i stacken */}
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
      </LinearGradient>
    );
  }

  const styles = StyleSheet.create({
    linearGradient: {
        height: '100%'
      }
  })
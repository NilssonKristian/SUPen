import 'react-native-gesture-handler';
import React from 'react';

import { StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import SectionDropdownPicker from '../components/SectionMaterialDropdown.js';
import ProgrammeDropdownPicker from '../components/ProgrammeMaterialDropdown.js';
import UniformButton from '../components/UniformButton.js';

export default function RegisterScreen({ navigation }) {
  return (
    <LinearGradient style={styles.linearGradient} colors={['#0E6888', '#4E83A2', '#011117']}>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Gå tillbaka till förstasidan" onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.button}>
          <Button title="Gå till inställningar" onPress={() => navigation.navigate('SettingsScreen')} />
        </View>
        <View style={styles.button}>
          <Button title='Gå till forum' onPress={() => navigation.navigate('MainScreen')} />
        </View>
      </View>
      <TouchableOpacity>
        <SectionDropdownPicker />
        <ProgrammeDropdownPicker style={styles.programmeDropdown} />
      </TouchableOpacity>
    </LinearGradient>
  );
}

// Designen av elementen inom denna fil. Skapas med metoden StyleSheet.create
const styles = StyleSheet.create({
  linearGradient: {
    height: '100%'
  },
  buttonContainer: {
    marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    fontSize: 20,
    marginTop: 30,
    width: 200,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.5
  },
  programmeDropdown: {
    marginTop: 20
  }
})
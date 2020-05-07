import 'react-native-gesture-handler';
import React from 'react';

import { StyleSheet, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import SectionDropdownPicker from '../components/SectionMaterialDropdown.js';
import ProgrammeDropdownPicker from '../components/ProgrammeMaterialDropdown.js';
import UniformButton from '../components/UniformButton.js';

export default function RegisterScreen({ navigation }) {
  return (
    <LinearGradient style={styles.linearGradient} colors={['#0E6888', '#4E83A2', '#011117']}>
      <View style={styles.dropdownContainer}>
        <SectionDropdownPicker />
        <ProgrammeDropdownPicker style={styles.programmeDropdown} />
      </View>
      <View style={styles.confirmButton}>
        <UniformButton insertText='Slutför' />
      </View>
      <Button title='Gå till inloggad sida' onPress={() => navigation.navigate('MainScreen')} />
    </LinearGradient>
  );
}

// Designen av elementen inom denna fil. Skapas med metoden StyleSheet.create
const styles = StyleSheet.create({
  linearGradient: {
    height: '100%'
  },
  programmeDropdown: {
    marginTop: 20
  },
  dropdownContainer: {
    marginTop: 250
  },
  confirmButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
}

})
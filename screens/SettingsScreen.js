import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import SectionDropdownPicker from '../components/SectionMaterialDropdown.js';
import ProgrammeDropdownPicker from '../components/ProgrammeMaterialDropdown.js'

export default function SettingsScreen({ navigation }) {
    return (
        <LinearGradient style={styles.linearGradient} colors={['#0E6888', '#4E83A2', '#57C9A9']}>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Gå tillbaka till förstasidan" onPress={() => navigation.navigate('Home')} />
                </View>
            </View>
            <View style={styles.dropdownContainer}>
                <Text style={styles.text}>Ändra din sektion:</Text>
                <SectionDropdownPicker />
            </View>
            <View style={styles.dropdownContainer}>
                <Text style={styles.text}>Ändra ditt program:</Text>
                <ProgrammeDropdownPicker />
            </View>
            <View style={styles.button}>
                <Button title='Forumsprenumerationer' />
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        height: '100%'
    },
    buttonContainer: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        fontSize: 20,
        width: 210,
        marginTop: 40,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 0 },
        shadowOpacity: 0.5
    },
    text: {
        fontSize: 20
    },
    container: {
        width: '80%'
    },
    dropdownContainer: {
        marginTop: 60
    }
})
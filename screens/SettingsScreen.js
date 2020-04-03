import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import SectionDropdownPicker from '../components/SectionMaterialDropdown.js';
import ProgrammeDropdownPicker from '../components/ProgrammeMaterialDropdown.js';
import Footer from '../components/Footer.js';

export default function SettingsScreen({ navigation }) {
    return (
        <LinearGradient style={styles.linearGradient} colors={['#0E6888', '#4E83A2', '#011117']}>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Gå tillbaka till förstasidan" onPress={() => navigation.navigate('HomeScreen')} />
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
            <View style={styles.footer}>
                <Footer />
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        height: '100%',
        flex:1,
        justifyContent:'space-between'
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
    },
    footer: {
        height:50
        
    }
})
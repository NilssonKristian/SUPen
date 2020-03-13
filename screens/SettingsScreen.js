import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SettingsScreen({ navigation }) {
    return (
        <LinearGradient style={styles.linearGradient} colors={['#0E6888', '#4E83A2', '#57C9A9']}>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title='Ändra sektion' />
                </View>
                <View style={styles.button}>
                    <Button title='Ändra program' />
                </View>
                <View style={styles.button}>
                    <Button title='Forumsprenumerationer' />
                </View>
            </View>
        </LinearGradient>
    );
}

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
        width: 210,
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 0 },
        shadowOpacity: 0.5
    }
})
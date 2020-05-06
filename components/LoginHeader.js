import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {    
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

// Designen av elementen inom denna fil. Skapas med metoden StyleSheet.create
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    headerText: {
        fontSize: 20,
        color: '#76AAD2',
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 0 },
        shadowOpacity: 0.8
    },
    icon: {
        position: 'absolute',
        color: 'white',
        left: -70
    }
});
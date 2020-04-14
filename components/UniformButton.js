import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';

//Klass som används för att appen ska ha enhetliga knappar på plattformarna.
export default class UniformButton extends Component {
    handlePress() {

    };

    render() {
        return (
            <TouchableOpacity onPress={this.props.handlePress}>
                <View style={styles.button}>
                    <Text style={{color: '#fff'}}>{this.props.insertText}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

// Designen av elementen inom denna fil. Skapas med metoden StyleSheet.create
const styles = StyleSheet.create({
    button: {
        
        backgroundColor: '#3b5998',
        borderColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent:'center',
        marginVertical: 5,
        paddingHorizontal:100,
        width:365,
        height:40
    }
});
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

export default class SectionDropdownPicker extends Component {
    render() {
        // Lägger till värden som sedan kan renderas i Dropdown längre ned i filen.
        let data = [{
            value: 'Civilekonomprogrammet',
        }, {
            value: 'Ekonomiprogrammet',
        }, {
            value: 'Statistikerprogrammet',
        }, {
            value: 'Systemvetenskapliga programmet',
        }];
        return (
            <Dropdown
                label='Välj det program du studerar:'
                data={data}
                pickerStyle={{
                    flex: 1, alignItems: 'center', backgroundColor: '#bfbfbf', shadowColor: 'black',
                    shadowOffset: { width: 5, height: 0 },
                    shadowOpacity: 0.6
                }}
            />
        );
    }
}

// Designen av elementen inom denna fil. Skapas med metoden StyleSheet.create
const styles = StyleSheet.create({
    dropdown: {
        width: '60%',
        height: 50
    }
});
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

export default class SectionDropdownPicker extends Component {
    render() {
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

const styles = StyleSheet.create({
    dropdown: {
        width: '60%',
        height: 50
    }
});
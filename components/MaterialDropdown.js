import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

export default class DropdownPicker extends Component {
    render() {
        let data = [{
            value: 'Corax',
        }, {
            value: 'ESN',
        }, {
            value: 'GIH',
        }, {
            value: 'Grythyttan',
        }, {
            value: 'Qultura',
        }, {
            value: 'Serum',
        }, {
            value: 'Sesam',
        }, {
            value: 'Sobra',
        }, {
            value: 'Teknat'
        }];

        return (
            <Dropdown
                label='Välj den sektion du tillhör'
                data={data}
                pickerStyle={{
                    height: 380, alignItems: 'center', backgroundColor: '#bfbfbf', shadowColor: 'black',
                    shadowOffset: { width: 5, height: 0 },
                    shadowOpacity: 0.6
                }}

            />
        );

    }
}

const styles = StyleSheet.create({
    dropdown: {
        width: '80%',
        height: 200
    }
});
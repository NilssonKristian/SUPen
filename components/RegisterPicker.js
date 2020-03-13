import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

export default class PickerExample extends Component {
    state = { user: '' }
    updateUser = (user) => {
        this.setState({ user: user })
    }
    render() {
        return (
            <View>
                <Picker
                    selectedValue={this.state.user}
                    onValueChange={this.updateUser}
                    itemStyle={{ backgroundColor: "transparent", color: "black", fontFamily: "Arial", fontSize: 17 }}>
                    <Picker.Item label="Corax" value="Corax" />
                    <Picker.Item label="ESN" value="ESN" />
                    <Picker.Item label="GIH" value="GIH" />
                    <Picker.Item label="Grythyttan" value="Grythyttan" />
                    <Picker.Item label="Qultura" value="Qultura" />
                    <Picker.Item label="Serum" value="Serum" />
                    <Picker.Item label="Sesam" value="Sesam" />
                    <Picker.Item label="Sobra" value="Sobra" />
                    <Picker.Item label="Teknat" value="Teknat" />
                </Picker>
                <Text style={styles.text}>{this.state.user}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        alignSelf: 'center'
    }
})
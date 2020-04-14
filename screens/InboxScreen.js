import React, { Component } from 'react'
import {View, Text} from 'react-native';
import Footer from '../components/Footer.js';


export class InboxScreen extends Component {
    render() {
        return (
            <View>
                <Text>Inbox Screen</Text>
                <Text>Här ska man se alla sin konversationer man har.</Text>
                <Footer />
            </View>
        )
    }
}

export default InboxScreen

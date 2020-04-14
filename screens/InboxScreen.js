import React from 'react'
import {View, Text} from 'react-native';
import Footer from '../components/Footer.js';


const InboxScreen = ({navigation}) => {
        return (
            <View>
                <Text>Inbox Screen</Text>
                <Text>Här ska man se alla sin konversationer man har.</Text>
                <Footer />
            </View>
        )
    }

export default InboxScreen

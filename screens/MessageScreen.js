import React, { Component } from 'react';
import {View, Text} from 'react-native';
import Footer from '../components/Footer.js';
import { View } from 'react-native';

const MessageScreen = ({navigation}) =>{
        return (
            <View>
                <Text>Message Screen!</Text>
                <Text>Här ska man se en konversation med en eller flera deltagare.</Text>
                <Footer />
            </View>
        )
    }

export default MessageScreen

import React, { Component } from 'react';
import {View, Text} from 'react-native';
import 'react-native-gesture-handler';

import Footer from '../components/Footer.js';

export class ForumHomeScreen extends Component ({ navigation }) {
    render() {
        return (
            <View>
                <Text>Forum Home Screen!</Text>
                <Text>Här ska man se alla sina forum.</Text>
                <Footer />
            </View>
        )
    }
}

export default ForumHomeScreen;
